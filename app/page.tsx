export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
        <div className="space-y-8">
          {/* Header */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Hello, I'm Adi.
            </h1>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I'm a Product Leader with 6+ years building <strong>enterprise AI agents and developer platforms</strong> at scale. 
              I've shipped 3 production AI agents (RAG/MCP) serving 50K+ sessions at Walmart Global Tech.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Builder who creates production tools using AI coding tools. Track record: 0→1 products, $40M+ impact, 500+ teams.
            </p>
          </div>

          {/* What I Do */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Currently
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Staff Platform Product Manager at <strong>Walmart Global Tech</strong>, leading Developer Experience & GenAI. 
              I build AI agents, orchestration platforms, and tools that help hundreds of PMs and developers ship better products faster.
            </p>
          </div>

          {/* Key Highlights */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Highlights
            </h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="mr-2">■</span>
                <span>Built 0-to-1 orchestration platform for <strong>250K+ edge devices</strong> across 10K+ locations</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">■</span>
                <span>Launched cost optimization tool driving <strong>$40M+ in cloud savings</strong></span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">■</span>
                <span>Developed 3 production AI agents with <strong>90%+ satisfaction</strong> across 50K+ sessions</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">■</span>
                <span>Scaled "IDE as Second Brain" framework to <strong>hundreds of PMs</strong> across Walmart</span>
              </li>
            </ul>
          </div>

          {/* Background */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Background
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              UCLA Anderson MBA (Product Management & Data Analytics) • Hebrew University J.D. & B.A. in Psychology (Cognitive Science) • 
              Former Senior Judicial Law Clerk at the Supreme Court of Israel
            </p>
          </div>

          {/* Tech Stack */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Tech & Tools
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong>AI/ML:</strong> Agent development (ADK, AutoGen, LangGraph), RAG architecture, MCP servers, LLM evals (Arize Phoenix)
              <br />
              <strong>Builder Tools:</strong> Cursor, Claude Code, Gemini AI Studio, V0
              <br />
              <strong>Platforms:</strong> CI/CD pipelines, API integrations, Data (Python, SQL, R), observability (Looker, Grafana)
            </p>
          </div>

          {/* Links */}
          <div className="pt-4">
            <p className="text-gray-700 dark:text-gray-300">
              You can find me on{" "}
              <a 
                href="https://www.linkedin.com/in/adidebel/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                LinkedIn
              </a>
              {" "}or reach me at{" "}
              <a 
                href="mailto:adidebel@gmail.com"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                adidebel@gmail.com
              </a>
              .
            </p>
          </div>

          {/* Fun Fact */}
          <div className="text-sm text-gray-600 dark:text-gray-400 italic pt-6 border-t border-gray-200 dark:border-gray-700">
            When I'm not building products, you'll find me scuba diving, alpine/rock climbing, or dreaming about owning a campground in the Eastern Sierras 🏔️
          </div>
        </div>
      </div>
    </main>
  );
}
