// Industry-specific content for personalized landing pages

export const industryContent = {
  hvac: {
    key: 'hvac',
    name: 'HVAC',
    icon: '❄️',
    color: '#3b82f6',
    colorClass: 'text-blue-500',
    bgClass: 'bg-blue-500/10',
    borderClass: 'border-blue-500/30',
    accentClass: 'bg-blue-500',
    
    headline: "Stop Losing Emergency Calls to Voicemail",
    subheadline: "Every missed call is a $450+ job walking to your competitor",
    
    painPoints: [
      {
        icon: 'Phone',
        title: "After-Hours Calls Go Unanswered",
        description: "Emergency AC repairs at 10 PM go to voicemail. By morning, they've called someone else."
      },
      {
        icon: 'Calendar',
        title: "Seasonal Demand Overwhelms Your Team",
        description: "Summer hits and suddenly you can't keep up with quotes, calls, and follow-ups."
      },
      {
        icon: 'Repeat',
        title: "Maintenance Renewals Slip Through",
        description: "Last year's customers don't get reminded. That's thousands in recurring revenue—gone."
      },
      {
        icon: 'Clock',
        title: "Slow Quote Response",
        description: "Price shoppers call 3 companies. The one who responds fastest wins 78% of the time."
      }
    ],
    
    calculatorDefaults: {
      monthlyLeads: 150,
      avgJobValue: 450,
      closeRate: 35,
    },
    
    testimonial: {
      quote: "Within the first month, we closed 12 additional jobs just from faster response times. The ROI was immediate.",
      name: "Mike R.",
      company: "Comfort Air Solutions",
      role: "Owner"
    },
    
    stats: {
      avgResponseTime: "4.2 hours",
      missedCallRate: "23%",
      followUpRate: "34%"
    }
  },
  
  plumbing: {
    key: 'plumbing',
    name: 'Plumbing',
    icon: '🔧',
    color: '#14b8a6',
    colorClass: 'text-teal-500',
    bgClass: 'bg-teal-500/10',
    borderClass: 'border-teal-500/30',
    accentClass: 'bg-teal-500',
    
    headline: "Stop Losing Emergency Calls While Your Team is in the Field",
    subheadline: "That burst pipe call at 3 PM? Gone to your competitor by 3:05.",
    
    painPoints: [
      {
        icon: 'Phone',
        title: "Technicians Can't Answer Phones",
        description: "Your best plumbers are under sinks, not at desks. Calls go unanswered."
      },
      {
        icon: 'Clock',
        title: "Emergency Triage Delays",
        description: "Is it a drip or a flood? Without instant assessment, you can't prioritize."
      },
      {
        icon: 'Calculator',
        title: "Price Shoppers Need Instant Quotes",
        description: "They're calling 3 plumbers. First to respond gets the job."
      },
      {
        icon: 'Repeat',
        title: "Repeat Customers Forgotten",
        description: "That water heater you installed 8 years ago? Replacement revenue—lost."
      }
    ],
    
    calculatorDefaults: {
      monthlyLeads: 120,
      avgJobValue: 380,
      closeRate: 40,
    },
    
    testimonial: {
      quote: "We went from missing 40% of calls to zero. Revenue up 25% in 90 days.",
      name: "Sarah T.",
      company: "Quick Flow Plumbing",
      role: "Operations Manager"
    },
    
    stats: {
      avgResponseTime: "3.8 hours",
      missedCallRate: "27%",
      followUpRate: "29%"
    }
  },
  
  electrical: {
    key: 'electrical',
    name: 'Electrical',
    icon: '⚡',
    color: '#f59e0b',
    colorClass: 'text-amber-500',
    bgClass: 'bg-amber-500/10',
    borderClass: 'border-amber-500/30',
    accentClass: 'bg-amber-500',
    
    headline: "Stop Letting Hot Leads Go Cold",
    subheadline: "Panel upgrades and EV charger installs don't wait—neither should your response.",
    
    painPoints: [
      {
        icon: 'Phone',
        title: "Safety Calls Need Immediate Assessment",
        description: "Flickering lights? Burning smell? These can't wait for a callback."
      },
      {
        icon: 'Calendar',
        title: "Big Projects Need Detailed Follow-Up",
        description: "Home renovations and commercial projects slip when follow-up is manual."
      },
      {
        icon: 'Clock',
        title: "Permit Coordination Chaos",
        description: "Scheduling around inspections is a full-time job. You don't have time."
      },
      {
        icon: 'Calculator',
        title: "Complex Quotes Take Too Long",
        description: "By the time you get back to them, they've hired someone else."
      }
    ],
    
    calculatorDefaults: {
      monthlyLeads: 100,
      avgJobValue: 650,
      closeRate: 30,
    },
    
    testimonial: {
      quote: "Our close rate on panel upgrades jumped from 25% to 45%. The speed made the difference.",
      name: "David L.",
      company: "PowerPro Electric",
      role: "Owner"
    },
    
    stats: {
      avgResponseTime: "5.1 hours",
      missedCallRate: "21%",
      followUpRate: "31%"
    }
  },
  
  moving: {
    key: 'moving',
    name: 'Moving',
    icon: '📦',
    color: '#8b5cf6',
    colorClass: 'text-purple-500',
    bgClass: 'bg-purple-500/10',
    borderClass: 'border-purple-500/30',
    accentClass: 'bg-purple-500',
    
    headline: "Stop Losing Moves to the First Company That Answers",
    subheadline: "Moving customers are stressed and impatient. Slow response = lost job.",
    
    painPoints: [
      {
        icon: 'Clock',
        title: "Quote Requests Come in Waves",
        description: "End of month? Moving season? Your inbox explodes and quotes get delayed."
      },
      {
        icon: 'Phone',
        title: "Price Shoppers Need Quick Turnaround",
        description: "They're getting 5 quotes. You have 30 minutes to be memorable."
      },
      {
        icon: 'Calendar',
        title: "Move Date Changes = Chaos",
        description: "Rescheduling cascades through your entire calendar. Coordination nightmare."
      },
      {
        icon: 'Repeat',
        title: "Post-Move Follow-Up Forgotten",
        description: "Reviews and referrals—your cheapest marketing—slip through the cracks."
      }
    ],
    
    calculatorDefaults: {
      monthlyLeads: 200,
      avgJobValue: 850,
      closeRate: 25,
    },
    
    testimonial: {
      quote: "Automated follow-ups alone generated 15 extra bookings last month. Pure profit.",
      name: "Ryan M.",
      company: "Confidence Moving",
      role: "Owner"
    },
    
    stats: {
      avgResponseTime: "2.9 hours",
      missedCallRate: "31%",
      followUpRate: "22%"
    }
  },
  
  landscaping: {
    key: 'landscaping',
    name: 'Landscaping',
    icon: '🌳',
    color: '#22c55e',
    colorClass: 'text-green-500',
    bgClass: 'bg-green-500/10',
    borderClass: 'border-green-500/30',
    accentClass: 'bg-green-500',
    
    headline: "Stop Missing Calls While You're on the Job Site",
    subheadline: "Landscaping bids are won with fast responses, not dirty voicemails.",
    
    painPoints: [
      {
        icon: 'Phone',
        title: "You're Outside, Calls Go Inside",
        description: "Can't answer when you're running a mower or talking to a client."
      },
      {
        icon: 'Calendar',
        title: "Seasonal Rush Overwhelms",
        description: "Spring hits and everyone wants quotes. You can't keep up."
      },
      {
        icon: 'Repeat',
        title: "Recurring Maintenance Falls Through",
        description: "Weekly mowing clients should renew automatically. They don't."
      },
      {
        icon: 'Calculator',
        title: "Estimate Follow-Up is Manual",
        description: "That $5,000 patio quote? You forgot to follow up. They went elsewhere."
      }
    ],
    
    calculatorDefaults: {
      monthlyLeads: 80,
      avgJobValue: 320,
      closeRate: 35,
    },
    
    testimonial: {
      quote: "We recovered $12,000 in lost estimates in the first month just from automated follow-ups.",
      name: "Carlos G.",
      company: "Green Thumb Landscaping",
      role: "Owner"
    },
    
    stats: {
      avgResponseTime: "6.2 hours",
      missedCallRate: "35%",
      followUpRate: "19%"
    }
  },
  
  default: {
    key: 'default',
    name: 'Service Business',
    icon: '🏢',
    color: '#10b981',
    colorClass: 'text-emerald-500',
    bgClass: 'bg-emerald-500/10',
    borderClass: 'border-emerald-500/30',
    accentClass: 'bg-emerald-500',
    
    headline: "Stop Leaving Money on the Table",
    subheadline: "Every missed call, forgotten follow-up, and slow quote costs you thousands.",
    
    painPoints: [
      {
        icon: 'Phone',
        title: "Calls Go to Voicemail",
        description: "Customers don't leave messages. They just call your competitor."
      },
      {
        icon: 'Clock',
        title: "Slow Response = Lost Jobs",
        description: "The first to respond gets the job 78% of the time. Are you first?"
      },
      {
        icon: 'Repeat',
        title: "Follow-Up Falls Through",
        description: "Manual follow-up means some leads never hear from you again."
      },
      {
        icon: 'Calendar',
        title: "No System, Just Chaos",
        description: "Post-its, texts, mental notes—things slip through the cracks."
      }
    ],
    
    calculatorDefaults: {
      monthlyLeads: 100,
      avgJobValue: 400,
      closeRate: 30,
    },
    
    testimonial: {
      quote: "We stopped losing leads to competitors who just responded faster. Game changer.",
      name: "Business Owner",
      company: "Local Service Company",
      role: "Owner"
    },
    
    stats: {
      avgResponseTime: "4.5 hours",
      missedCallRate: "23%",
      followUpRate: "28%"
    }
  }
};

export function getIndustryContent(industryKey) {
  return industryContent[industryKey] || industryContent.default;
}

export function getAllIndustries() {
  return Object.keys(industryContent);
}