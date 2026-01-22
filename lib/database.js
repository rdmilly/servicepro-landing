// Database utilities for prospect management (optional PostgreSQL)
// Falls back gracefully when DATABASE_URL is not set

let pool = null;

if (process.env.DATABASE_URL) {
  const { Pool } = require('pg');
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
  });
}

// Initialize database tables
export async function initDatabase() {
  if (!pool) return false;
  
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS prospects (
        id SERIAL PRIMARY KEY,
        slug VARCHAR(100) UNIQUE NOT NULL,
        first_name VARCHAR(100),
        company_name VARCHAR(200),
        industry VARCHAR(50) DEFAULT 'default',
        pain_point TEXT,
        video_url TEXT,
        email VARCHAR(255),
        phone VARCHAR(50),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
      
      CREATE TABLE IF NOT EXISTS prospect_visits (
        id SERIAL PRIMARY KEY,
        prospect_id INTEGER REFERENCES prospects(id),
        visited_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        user_agent TEXT,
        ip_address VARCHAR(50),
        referrer TEXT
      );
      
      CREATE TABLE IF NOT EXISTS prospect_events (
        id SERIAL PRIMARY KEY,
        prospect_id INTEGER REFERENCES prospects(id),
        event_type VARCHAR(50) NOT NULL,
        event_data JSONB,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
      
      CREATE INDEX IF NOT EXISTS idx_prospects_slug ON prospects(slug);
      CREATE INDEX IF NOT EXISTS idx_visits_prospect ON prospect_visits(prospect_id);
      CREATE INDEX IF NOT EXISTS idx_events_prospect ON prospect_events(prospect_id);
    `);
    return true;
  } catch (error) {
    console.error('Database init error:', error);
    return false;
  }
}

// Get prospect by slug
export async function getProspectBySlug(slug) {
  if (!pool) return null;
  
  try {
    const result = await pool.query(
      'SELECT * FROM prospects WHERE slug = $1',
      [slug]
    );
    return result.rows[0] || null;
  } catch (error) {
    console.error('Error fetching prospect:', error);
    return null;
  }
}

// Create new prospect
export async function createProspect({ firstName, companyName, industry, painPoint, videoUrl, email, phone }) {
  if (!pool) return null;
  
  // Generate unique slug
  const baseSlug = `${firstName}-${companyName}`.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
  const uniqueId = Math.random().toString(36).substring(2, 6);
  const slug = `${baseSlug}-${uniqueId}`;
  
  try {
    const result = await pool.query(
      `INSERT INTO prospects (slug, first_name, company_name, industry, pain_point, video_url, email, phone)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
       RETURNING *`,
      [slug, firstName, companyName, industry || 'default', painPoint, videoUrl, email, phone]
    );
    return result.rows[0];
  } catch (error) {
    console.error('Error creating prospect:', error);
    return null;
  }
}

// Record visit
export async function recordVisit(prospectId, { userAgent, ipAddress, referrer }) {
  if (!pool || !prospectId) return null;
  
  try {
    const result = await pool.query(
      `INSERT INTO prospect_visits (prospect_id, user_agent, ip_address, referrer)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [prospectId, userAgent, ipAddress, referrer]
    );
    return result.rows[0];
  } catch (error) {
    console.error('Error recording visit:', error);
    return null;
  }
}

// Record event (scroll, click, time on page, etc.)
export async function recordEvent(prospectId, eventType, eventData = {}) {
  if (!pool || !prospectId) return null;
  
  try {
    const result = await pool.query(
      `INSERT INTO prospect_events (prospect_id, event_type, event_data)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [prospectId, eventType, JSON.stringify(eventData)]
    );
    return result.rows[0];
  } catch (error) {
    console.error('Error recording event:', error);
    return null;
  }
}

// Get prospect analytics
export async function getProspectAnalytics(prospectId) {
  if (!pool || !prospectId) return null;
  
  try {
    const visits = await pool.query(
      'SELECT COUNT(*) as total, MAX(visited_at) as last_visit FROM prospect_visits WHERE prospect_id = $1',
      [prospectId]
    );
    
    const events = await pool.query(
      'SELECT event_type, COUNT(*) as count FROM prospect_events WHERE prospect_id = $1 GROUP BY event_type',
      [prospectId]
    );
    
    return {
      totalVisits: parseInt(visits.rows[0]?.total || 0),
      lastVisit: visits.rows[0]?.last_visit,
      events: events.rows
    };
  } catch (error) {
    console.error('Error fetching analytics:', error);
    return null;
  }
}

export { pool };