/**
 * v0 by Vercel.
 * @see https://v0.dev/t/jCgSLwnrPys
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6 space-y-10">
        <div className="text-center space-y-4">
          <div className="inline-block rounded-lg bg-black px-3 py-1 text-sm text-primary-foreground">
            Trading Bot Features
          </div>
          <h2 className="text-3xl font-bold text-black tracking-tighter sm:text-4xl md:text-5xl">
            Unlock Your Trading Potential
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Our advanced trading bot is designed to help you navigate the
            ever-changing market with ease. Discover the key features that set
            it apart.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="flex flex-col items-center justify-start space-y-4 rounded-lg bg-background p-6 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <div className="rounded-full bg-primary p-3 bg-black text-primary-foreground">
              <BotIcon className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-black text-center">
              Automated Trading
            </h3>
            <p className="text-center text-muted-foreground text-gray-500">
              Our bot executes trades based on advanced algorithms, ensuring
              consistent and reliable performance.
            </p>
          </div>
          <div className="flex flex-col items-center justify-start space-y-4 rounded-lg bg-background p-6 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <div className="rounded-full bg-primary p-3 bg-black text-primary-foreground">
              <InfoIcon className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-center text-black">
              Comprehensive Analytics
            </h3>
            <p className="text-center text-muted-foreground text-gray-500">
              Gain deep insights into your trading performance with our advanced
              analytics dashboard.
            </p>
          </div>
          <div className="flex flex-col items-center justify-start space-y-4 rounded-lg bg-background p-6 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <div className="rounded-full bg-primary p-3 bg-black text-primary-foreground">
              <RatioIcon className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-center text-black">
              Intelligent Risk Management
            </h3>
            <p className="text-center text-muted-foreground  text-gray-500">
              Our bot employs sophisticated risk management strategies to
              protect your capital and maximize your returns.
            </p>
          </div>
          <div className="flex flex-col items-center justify-start space-y-4 rounded-lg bg-background p-6 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <div className="rounded-full bg-primary p-3 bg-black text-primary-foreground">
              <ComponentIcon className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-center text-black">
              Customizable Settings
            </h3>
            <p className="text-center text-muted-foreground  text-gray-500">
              Tailor the bot to your unique trading style and preferences with
              our flexible customization options.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function BotIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  );
}

function ComponentIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z" />
      <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z" />
      <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z" />
      <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z" />
    </svg>
  );
}

function InfoIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}

function RatioIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="12" height="20" x="6" y="2" rx="2" />
      <rect width="20" height="12" x="2" y="6" rx="2" />
    </svg>
  );
}
