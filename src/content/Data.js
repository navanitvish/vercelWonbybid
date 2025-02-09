// src/data/stepsData.js
import { Monitor, Users, Trophy } from 'lucide-react';

export const steps = [
  {
    title: "Select a Match",
    description: "Select an upcoming match of your choice",
    icon: <Monitor className="w-6 h-6 sm:w-7 sm:h-7" />
  },
  {
    title: "Create Your own Private Contests",
    description: "Use your sports knowledge to create a team using 100 credits",
    icon: <Users className="w-6 h-6 sm:w-7 sm:h-7" />
  },
  {
    title: "Join Contests",
    description: "Participate in Cash or Practice Contests",
    icon: <Trophy className="w-6 h-6 sm:w-7 sm:h-7" />
  }
];


