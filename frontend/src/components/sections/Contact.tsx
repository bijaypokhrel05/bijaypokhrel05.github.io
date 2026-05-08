import { useForm, ValidationError } from '@formspree/react';

export function Contact() {
  const [state, handleSubmit] = useForm('xgodlgqp');

  return (
    <section className="max-w-[1200px] mx-auto px-6 mb-24 scroll-mt-32" id="contact">
      <div className="bg-surface-container border border-outline-variant rounded-2xl p-10 md:p-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-h1 text-4xl mb-6">Let's build something <span className="text-secondary italic">exceptional</span>.</h2>
            <p className="text-on-surface-variant mb-10 max-w-md">Available for engineering roles or collaborative projects. Let's talk about how I can contribute to your team.</p>
            
            <div className="space-y-4">
              <a className="flex items-center gap-4 group" href="mailto:bijay.pokhrel05@gmail.com">
                <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined">alternate_email</span>
                </div>
                <span className="font-code-sm text-sm group-hover:text-primary transition-colors">bijay.pokhrel05@gmail.com</span>
              </a>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded bg-secondary/10 flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined">phone</span>
                </div>
                <span className="font-code-sm text-sm">9825300409</span>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <span className="font-code-sm text-sm">Kupondole, Lalitpur, Nepal</span>
              </div>
            </div>
          </div>
          
          <div className="bg-surface-container-highest p-8 rounded-xl border border-outline-variant relative overflow-hidden">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="font-label-caps text-[10px] text-outline mb-1 block" htmlFor="full-name">Full Name</label>
                <input 
                  id="full-name"
                  name="name"
                  required
                  className="w-full bg-background border-outline-variant focus:border-secondary focus:ring-0 rounded-lg text-sm p-3 text-white placeholder:text-white/20" 
                  type="text" 
                  placeholder="Your Name"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-400 text-[10px] mt-1" />
              </div>
              <div>
                <label className="font-label-caps text-[10px] text-outline mb-1 block" htmlFor="email">Email Address</label>
                <input 
                  id="email"
                  name="email"
                  required
                  className="w-full bg-background border-outline-variant focus:border-secondary focus:ring-0 rounded-lg text-sm p-3 text-white placeholder:text-white/20" 
                  type="email" 
                  placeholder="your@email.com"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-[10px] mt-1" />
              </div>
              <div>
                <label className="font-label-caps text-[10px] text-outline mb-1 block" htmlFor="message">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  required
                  className="w-full bg-background border-outline-variant focus:border-secondary focus:ring-0 rounded-lg text-sm p-3 text-white placeholder:text-white/20" 
                  rows={4}
                  placeholder="Tell me about your project..."
                ></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-[10px] mt-1" />
              </div>
              
              <button 
                type="submit"
                disabled={state.submitting}
                className="w-full bg-secondary text-on-secondary font-bold py-3 rounded-lg hover:brightness-110 transition-all uppercase tracking-widest text-xs flex items-center justify-center gap-2 shadow-lg shadow-secondary/20 disabled:opacity-50"
              >
                {state.submitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-on-secondary border-t-transparent rounded-full animate-spin"></span>
                    Transmitting...
                  </>
                ) : (
                  'Execute Contact'
                )}
              </button>
            </form>

            {state.succeeded && (
              <div className="absolute inset-0 bg-surface-container-highest/98 backdrop-blur-md flex flex-col items-center justify-center text-center p-6 animate-in fade-in zoom-in duration-300">
                <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 mb-6">
                  <span className="material-symbols-outlined text-5xl">check_circle</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">Message Delivered!</h3>
                <p className="text-sm text-on-surface-variant mb-8 max-w-[250px]">I have received your transmission and will get back to you shortly.</p>
                <button 
                  onClick={() => window.location.reload()} // Simple reset
                  className="px-6 py-2 border border-secondary text-secondary rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-secondary hover:text-on-secondary transition-all"
                >
                  Send another message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
