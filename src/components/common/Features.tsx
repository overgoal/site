import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="w-full min-h-screen flex flex-col relative bg-background text-foreground"
    >
      {/* How it Works Section */}
      <div className="w-full border-b border-highlight">
        <div className="grid grid-cols-1 lg:grid-cols-5 min-h-[80vh]">
          {/* Image Area - Left Side */}
          <div className="lg:col-span-3 relative border-r border-highlight">
            <div className="w-full h-full bg-surface/20 flex items-center justify-center p-8">
              <div className="w-full h-96 bg-highlight/30 border border-primary/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7v10c0 5.55 3.84 9.739 8.9 9.99L12 17l1.1-.01C18.16 16.739 22 12.55 22 17V7l-10-5z"/>
                    </svg>
                  </div>
                  <p className="text-muted font-chakra">Game Flow Diagram</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Area - Right Side */}
          <div className="lg:col-span-2 flex flex-col justify-center p-8 bg-surface/10">
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h2 className="text-4xl lg:text-5xl font-air-strike uppercase text-white mb-2">
                  How it
                </h2>
                <h2 className="text-4xl lg:text-5xl font-air-strike uppercase text-primary">
                  Works
                </h2>
              </div>
              
              <div className="space-y-4 font-chakra text-lg text-muted leading-relaxed">
                <p>
                  Every match and decision in Overgoal matters. Earn points, <span className="text-primary font-bold">$GOAL</span>, and <span className="text-secondary font-bold">REP</span> as you compete, wager, and progress through daily, weekly, and monthly events.
                </p>
                <p>
                  Rise in the ranks, convert REP into $GOAL, mint your Legend, and compete for real rewards. Player spending grows the value pool for everyone—aligning incentives and fueling organic growth.
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <span className="text-primary font-air-strike font-bold">$</span>
                </div>
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                  <span className="text-secondary font-air-strike font-bold">R</span>
                </div>
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <span className="text-accent font-air-strike font-bold">L</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Features Section */}
      <div className="w-full border-b border-highlight">
        <div className="p-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl lg:text-6xl font-air-strike uppercase text-white mb-4">
              Core <span className="text-primary">Features</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature Cards */}
            {[
              {
                title: "Modular Architecture",
                description: "Built on Dojo + Starknet with upgradeable components",
                icon: "🏗️",
                color: "primary"
              },
              {
                title: "Fee-Driven Treasury",
                description: "Powering rewards, salaries, and sustainable growth",
                icon: "💰",
                color: "secondary"
              },
              {
                title: "Legend Progression",
                description: "Evolve, rank up, and unlock exclusive rewards",
                icon: "⚡",
                color: "accent"
              },
              {
                title: "Community Governance",
                description: "Vote on seasonal structure and game evolution",
                icon: "🗳️",
                color: "success"
              },
              {
                title: "Dual Currency",
                description: "$GOAL for utility, REP for progression tracking",
                icon: "🪙",
                color: "primary"
              },
              {
                title: "Player-Built Teams",
                description: "Create teams and compete against AI opponents",
                icon: "👥",
                color: "secondary"
              },
              {
                title: "Shared Universe",
                description: "One economy powering multiple interconnected games",
                icon: "🌐",
                color: "accent"
              },
              {
                title: "Full Transparency",
                description: "Completely on-chain, auditable game flows",
                icon: "🔍",
                color: "success"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative bg-surface/30 border border-highlight hover:border-primary/50 rounded-lg p-6 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="space-y-4">
                  {/* Image Placeholder */}
                  <div className="w-full h-32 bg-highlight/20 border border-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:border-primary/30 transition-colors">
                    <div className="text-4xl">{feature.icon}</div>
                  </div>
                  
                  <h3 className="text-xl font-air-strike uppercase text-white group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted font-chakra text-sm leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Accent Line */}
                  <div className={`w-full h-1 bg-gradient-to-r from-${feature.color} to-${feature.color}/20 opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Meet the Team Section */}
      <div className="w-full border-b border-highlight">
        <div className="p-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl lg:text-6xl font-air-strike uppercase text-white mb-4">
              Meet the <span className="text-secondary">Team</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-secondary to-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Matias Grunwaldt",
                role: "CEO & Dev",
                description: "Creator of Uruguay's first fantasy football game; CTO @ Eyecue Insights",
                expertise: "Game Development & Leadership"
              },
              {
                name: "Bautista Berto",
                role: "CTO & DevEx",
                description: "Lead game dev @ LambdaClass Game Studio; hackathon winner",
                expertise: "Blockchain & Development"
              },
              {
                name: "Alex Mack",
                role: "Producer & Game Design",
                description: "Shipped 30+ games; ex-EA, Namco, Sony, Atari",
                expertise: "Game Production & Design"
              },
              {
                name: "Ger Gahn",
                role: "Art Director",
                description: "Versatile 2D/3D artist; mentored by top industry veterans",
                expertise: "Visual Design & Art Direction"
              }
            ].map((member, index) => (
              <div
                key={index}
                className="group relative bg-surface/20 border border-highlight hover:border-secondary/50 rounded-lg overflow-hidden transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Large Image Area */}
                <div className="w-full h-64 bg-highlight/20 border-b border-highlight/50 flex items-center justify-center group-hover:border-secondary/30 transition-colors">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-secondary/20 rounded-full flex items-center justify-center">
                      <svg className="w-12 h-12 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                    <p className="text-muted font-chakra text-sm">Team Photo</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div>
                    <h3 className="text-xl font-air-strike uppercase text-white group-hover:text-secondary transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-primary font-chakra font-bold text-sm uppercase tracking-wide">
                      {member.role}
                    </p>
                  </div>
                  
                  <p className="text-muted font-chakra text-sm leading-relaxed">
                    {member.description}
                  </p>

                  <div className="pt-2">
                    <span className="text-xs font-chakra text-accent uppercase tracking-wide">
                      {member.expertise}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="w-full">
        <div className="relative min-h-[60vh] flex items-center justify-center p-8">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-surface/10"></div>
          
          {/* Main CTA Content */}
          <div className="relative z-10 text-center max-w-4xl mx-auto space-y-8">
            {/* Large Image Area */}
            <div className="w-full h-64 mb-8 bg-highlight/20 border-2 border-primary/30 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                  <svg className="w-16 h-16 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM19 20H5V9h14v11z"/>
                  </svg>
                </div>
                <p className="text-muted font-chakra">Game Preview</p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-6xl lg:text-7xl font-air-strike uppercase text-white leading-tight">
                Ready to become a{" "}
                <span className="text-transparent bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text">
                  Legend?
                </span>
              </h2>
              
              <p className="text-xl font-chakra text-muted max-w-2xl mx-auto leading-relaxed">
                Join the Overgoal universe—play, build, and shape the future of football on-chain.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <Link
                href="https://www.overgoal.com"
                target="_blank"
                className="group"
              >
                <Button className="bg-primary hover:bg-primary-hover text-black font-chakra font-bold text-lg px-8 py-6 rounded-lg transition-all duration-300 group-hover:transform group-hover:scale-105">
                  Sign Up for Early Access
                </Button>
              </Link>
              
              <Link
                href="#"
                className="group"
              >
                <Button 
                  variant="outline" 
                  className="border-secondary text-secondary hover:bg-secondary hover:text-black font-chakra font-bold text-lg px-8 py-6 rounded-lg transition-all duration-300 group-hover:transform group-hover:scale-105"
                >
                  Join Community
                </Button>
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-8 pt-8">
              {["Twitter", "Discord", "Telegram"].map((platform, index) => (
                <Link
                  key={index}
                  href="#"
                  className="group flex items-center gap-2 text-muted hover:text-primary transition-colors"
                >
                  <div className="w-8 h-8 bg-highlight rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <span className="text-sm font-chakra font-bold">
                      {platform[0]}
                    </span>
                  </div>
                  <span className="font-chakra text-sm">
                    {platform}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
