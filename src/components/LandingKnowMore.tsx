import LandingItems from "./LandingItems"

const LandingKnowMore = () => {
  return (
    <div className="w-full anton h-auto gap-5 bg-[#121212] flex justify-center p-10 py-20 flex-wrap">
        <div className="w-[600px] rounded-2xl h-auto bg-[#222124] border-l-violet-700 border-l-2 inset-effect text-sm p-10">
            <span className="font-bold text-[30px] merri">🚀 90-Day Tech Challenge:</span> 
            <p className="leading-7"> Master your Cutting-Edge Domains 
                Embark on an intense, hands-on journey through the most 
                in-demand tech fields—from frontend to AI, blockchain, 
                cybersecurity, and beyond. This challenge is designed 
                for builders who want to break out of tutorial hell, 
                expand their skills, and create a powerful portfolio in 
                just 90 days.
            </p>

            <span className="font-bold relative text-[20px] merri">📌 What’s Inside : </span>
            <p className="leading-10">
                <p><span className="font-bold">12 + Real Projects</span> – No toy apps. Build deployable, resume-worthy software.</p>

                <p><span className="font-bold">7 Tech Stacks</span> – Frontend, Backend, Fullstack, AI, Blockchain, Cybersecurity, and Data Science.</p>

                <p><span className="font-bold">Modern Stacks</span> – React, Next.js, Node.js, TensorFlow, Solidity, FastAPI, and more.</p>

                <p> <span className="font-bold">Daily Tasks</span> – Structured, bite-sized goals to keep you moving forward.</p>

                <p><span className="font-bold">Cross-Discipline Skills</span> – Learn how technologies intersect (e.g., AI-powered fullstack apps, secure blockchain backends).</p>
            </p>
            <span className="font-bold relative text-[20px] merri">📌 Who is this For ? </span>
            <p className="leading-10">
                <p> ✔ Aspiring Devs. </p>
                <p> ✔ Aspiring Fullstack Devs who want end-to-end expertise.</p>
                <p> ✔ AI/Blockchain Enthusiasts ready to build real-world systems.</p>
                <p> ✔ Career Switchers needing a fast, project-driven ramp-up</p>
                <p> ✔ Coders Who Learn by Doing – no fluff, just building.</p>
            </p>
        </div>
        <div className="w-[600px] rounded-2xl h-auto bg-[#222124] border-l-violet-700 border-l-2 inset-effect text-sm p-10">
            <span className="font-bold relative text-[20px] merri">📌 Why This Works ?</span>
            <p className="leading-10">
                <p><span className="font-bold">No Overwhelm</span> – Daily tasks keep progress steady.</p>
                <p><span className="font-bold">Portfolio-First</span> – Every week ships a project.</p>
                <p><span className="font-bold">Industry-Ready Skills</span> – Learn what companies actually use.</p>
            </p>
            <span className="font-bold relative text-[20px] merri">📌 Rules : </span>
            <p className="leading-10">
                <p>Code Every Day (minimum 1 hour).</p>
                <p>Public Accountability (GitHub, Twitter, blog).</p>
                <p>Weekends = Debug & Reflect.</p>
            </p>
                <span className="font-bold relative text-[20px] merri"> 🚀 Ready to Level Up ? </span>
                <p className="leading-8">
                    <p>"The best time to start was yesterday. The next best
                    time is today."</p>
                    <p>👉 Start Now: Pick Day 1’s task and commit publicly.
                        Let’s build the future!
                    </p>
                </p>
        </div>
        <div className="w-[600px] gap-5 m-5 flex justify-center flex-wrap">
            <LandingItems text={"Choose your Stack"} />
            <LandingItems text={"Join Our Socials"} />
            <LandingItems text={"Post On Your Social Page"} />
            <LandingItems text={"Avoid Burn Outs"} />
        </div>
    </div>
  )
}

export default LandingKnowMore