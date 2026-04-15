/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Droplets, Shield, Leaf, Globe, ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background Texture */}
      <div className="bg-texture" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-sky/80 backdrop-blur-md border-b border-teal/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-teal rounded-full flex items-center justify-center">
              <Droplets className="text-white w-6 h-6" />
            </div>
            <span className="text-sm font-sans font-extrabold tracking-[0.2em] text-teal uppercase">
              All Nations
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <span className="text-sm font-serif italic text-deep/60 mr-4">Brand Style Guide v1.0</span>
            {["Identity", "Products", "Protection", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-semibold uppercase tracking-widest text-deep/70 hover:text-teal transition-colors"
              >
                {item}
              </a>
            ))}
            <button className="bg-teal text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-deep transition-all shadow-lg shadow-teal/20">
              Get Quote
            </button>
          </div>

          <button 
            className="md:hidden text-deep"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-teal/10 p-6 flex flex-col gap-4"
          >
            {["Identity", "Products", "Protection", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-semibold uppercase tracking-widest text-deep/70"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="identity" className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeIn}>
            <div className="type-label">
              Premium Hygiene Solutions
            </div>
            <h1 className="text-[72px] md:text-[110px] font-serif font-black text-deep leading-[0.85] mb-8">
              Softness <br />
              <span className="text-gold italic">Without</span> <br />
              Boundaries
            </h1>
            <p className="text-lg tracking-[0.05em] text-teal max-w-[400px] mb-10 leading-[1.6]">
              Crafting the world's most delicate yet resilient tissues. 
              All Nations Tissues brings global standards of comfort to your everyday life.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-teal text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-deep transition-all flex items-center gap-2 group">
                Explore Collection <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-teal text-teal px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-teal hover:text-white transition-all">
                Our Story
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square bg-white rounded-xl shadow-[0_40px_80px_rgba(2,77,70,0.15)] border border-white/80 overflow-hidden relative group">
              <img 
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000" 
                alt="Soft Tissues"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep/40 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/90 backdrop-blur p-6 rounded-lg border border-white/20">
                  <p className="text-deep font-serif italic text-xl mb-2">"The touch of a cloud, the strength of a nation."</p>
                  <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-teal">— Quality Assurance</p>
                </div>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gold/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-teal/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white/50 border-t border-teal/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="type-label mb-12">Core Values</div>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-12"
          >
            {[
              { icon: Shield, title: "Pure Hygiene", desc: "100% virgin pulp, sterilized at 450°C for absolute purity.", color: "teal" },
              { icon: Leaf, title: "Eco-Conscious", desc: "Sustainably sourced fibers from certified forests worldwide.", color: "gold" },
              { icon: Globe, title: "Global Reach", desc: "Supplying premium comfort to over 40 nations across 5 continents.", color: "deep" }
            ].map((value, i) => (
              <motion.div 
                key={i}
                variants={fadeIn}
                className="p-8 rounded-lg border border-teal/5 hover:border-teal/20 transition-all hover:shadow-xl hover:shadow-teal/5 bg-white"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-${value.color}/10`}>
                  <value.icon className={`text-${value.color} w-8 h-8`} />
                </div>
                <h3 className="text-2xl font-bold text-deep mb-4">{value.title}</h3>
                <p className="text-deep/60 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Product Showcase */}
      <section id="products" className="py-20 border-t border-teal/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <div className="type-label">The Collection</div>
            <h2 className="text-4xl md:text-6xl font-black text-deep mb-4">Pure Comfort Defined.</h2>
            <p className="text-teal text-sm font-bold tracking-[0.05em]">Engineered for every moment</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Velvet Touch", type: "Facial Tissue", img: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&q=80&w=500" },
              { name: "Aqua Guard", type: "Kitchen Towel", img: "https://images.unsplash.com/photo-1621460245180-604780650942?auto=format&fit=crop&q=80&w=500" },
              { name: "Cloud Soft", type: "Toilet Roll", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=500" },
              { name: "Pure Pocket", type: "Pocket Pack", img: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=500" }
            ].map((product, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="aspect-[3/4] rounded-lg overflow-hidden mb-6 relative border border-white/80 shadow-lg">
                  <img 
                    src={product.img} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-deep/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-white text-deep px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em]">View Details</button>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-deep mb-1">{product.name}</h4>
                <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-gold">{product.type}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Germ Protection Section */}
      <section id="protection" className="py-20 bg-deep overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-germ-green rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-germ-red rounded-full blur-2xl animate-bounce" />
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-germ-purple rounded-full blur-lg" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
                Beyond Softness: <br />
                <span className="text-kill-flash">99.9% Protection</span>
              </h2>
              <p className="text-white/70 text-lg mb-10 leading-relaxed">
                Our advanced Germ-Shield technology creates an invisible barrier. 
                Each sheet is treated with organic antimicrobial agents that neutralize pathogens on contact.
              </p>
              <div className="space-y-6">
                {[
                  { label: "Bacteria Neutralization", color: "germ-green", val: "99.9%" },
                  { label: "Viral Protection", color: "germ-red", val: "98.5%" },
                  { label: "Hypoallergenic", color: "germ-purple", val: "100%" }
                ].map((stat, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-sm font-bold uppercase tracking-widest text-white/80">
                      <span>{stat.label}</span>
                      <span>{stat.val}</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: stat.val }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className={`h-full bg-${stat.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative flex justify-center"
            >
              <div className="w-80 h-80 md:w-[500px] md:h-[500px] rounded-full border border-white/10 flex items-center justify-center relative">
                <div className="absolute inset-0 border border-white/5 rounded-full animate-[spin_20s_linear_infinite]" />
                <div className="absolute inset-10 border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                <div className="w-64 h-64 md:w-96 md:h-96 bg-white rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(255,241,118,0.2)]">
                  <Shield className="w-32 h-32 md:w-48 md:h-48 text-teal" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-soft pt-20 pb-10 px-6 border-t border-teal/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-10 h-10 bg-teal rounded-full flex items-center justify-center">
                  <Droplets className="text-white w-6 h-6" />
                </div>
                <span className="text-2xl font-serif font-bold tracking-tight text-deep uppercase">
                  All Nations <span className="text-gold">Tissues</span>
                </span>
              </div>
              <p className="text-deep/60 max-w-sm mb-8 leading-relaxed">
                Redefining hygiene standards globally through innovation, sustainability, and uncompromising comfort.
              </p>
              <div className="flex gap-4">
                {["Twitter", "Instagram", "LinkedIn"].map((social) => (
                  <a key={social} href="#" className="w-10 h-10 rounded-full border border-teal/20 flex items-center justify-center text-deep hover:bg-teal hover:text-white transition-all">
                    <span className="sr-only">{social}</span>
                    <div className="w-5 h-5 bg-current rounded-sm opacity-20" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h5 className="text-sm font-bold uppercase tracking-widest text-deep mb-8">Navigation</h5>
              <ul className="space-y-4">
                {["Identity", "Products", "Protection", "Sustainability", "Careers"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-deep/60 hover:text-teal transition-colors text-sm font-medium">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-sm font-bold uppercase tracking-widest text-deep mb-8">Contact</h5>
              <ul className="space-y-4 text-sm text-deep/60">
                <li>02 Die Laan Street, Eloff, Mpumalanga, South Africa</li>
                <li>Email: hello@allnationstissues.com</li>
                <li>Call & WhatsApp: 0655871073</li>
              </ul>
            </div>
          </div>

          <div className="pt-10 border-t border-teal/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] leading-[1.5] opacity-70 text-deep">
            <p>© 2024 All Nations Group<br />Identity Concept: Environmental Softness</p>
            <div className="flex flex-col items-end gap-1">
              <p className="uppercase tracking-[0.1em]">Confidential Identity Document</p>
              <p className="uppercase tracking-[0.1em]">Project Code: AN-2024-SILK</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
