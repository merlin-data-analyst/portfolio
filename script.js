const IM = ["images/photo.jpg", "images/qsr-1.jpg", "images/qsr-2.jpg", "images/qsr-3.jpg", "images/ecom-1.jpg", "images/ecom-2.jpg"];
const EDU = [["Master of Computer Applications (MCA)", "University of Madras (Correspondence) · 2024 – 2026 (Currently Pursuing)"], ["Bachelor of Computer Applications (BCA)", "Chevalier T Thomas Elizabeth College for Women · 2022 – 2024"], ["Diploma in Computer Science Engineering (DCSE)", "T.J.S Polytechnic College · 2019 – 2022"]];
const SK = ["Data Cleaning", "EDA", "Statistical Analysis", "Hypothesis Testing", "A/B Testing", "Root Cause Analysis", "Predictive Analysis", "Business Intelligence", "Data Storytelling", "Data Visualization"];
const P = [
    {
        id: "qsr", ic: "🍔", t: "QSR Operational Analysis", g: "linear-gradient(135deg,#7a3b12,#1a0b2e)", img: [1, 2, 3], tools: ["Python", "Pandas", "NumPy", "MySQL", "Power BI"],
        s: "Analyzed 3,630+ QSR operational records to identify service bottlenecks, customer satisfaction drivers, inventory gaps and staff efficiency.",
        ov: "Analyzed 3,630+ Quick Service Restaurant (QSR) operational records to identify service bottlenecks, understand customer satisfaction, evaluate inventory availability, and assess staff efficiency. Built an interactive Power BI dashboard to turn operational data into actionable business recommendations.",
        q: "How can a quick service restaurant reduce customer waiting times, improve customer satisfaction, minimize stock unavailability, and optimize operational efficiency using data-driven insights?",
        pr: ["<b>Long waiting times:</b> Were customers experiencing delays, and how were waiting times associated with customer satisfaction?", "<b>Inventory availability:</b> How frequently were items unavailable?", "<b>Staff efficiency:</b> How strongly was staff efficiency associated with customer satisfaction?", "<b>Table utilization:</b> How effectively was seating capacity used?", "<b>Menu performance:</b> Which menu items and operational patterns need investigation?"],
        ap: ["<b>Data cleaning:</b> Python (Pandas, NumPy) to clean, validate and prepare the dataset.", "<b>SQL analysis:</b> Queried operational data to examine KPIs and patterns.", "<b>EDA:</b> Waiting times, satisfaction, inventory, staff efficiency and table utilization.", "<b>Dashboard:</b> Power BI with KPI cards, visualizations and navigation buttons."],
        kp: [["551", "long-wait orders (~15.2%)"], ["909", "stock-unavailable records (~25.0%)"], ["−0.306", "wait time vs satisfaction"], ["+0.578", "staff efficiency vs satisfaction"]],
        f: ["Longer waiting times tended to be associated with lower customer satisfaction.", "Higher staff efficiency tended to be associated with higher customer satisfaction.", "Correlations show relationships, not proof of causation."],
        r: ["<b>Reduce waiting times:</b> Investigate when and under what order conditions long waits occur; review workflows and staffing in high-demand periods.", "<b>Improve inventory management:</b> Monitor stock unavailability by item and time; strengthen replenishment planning.", "<b>Optimize staff allocation:</b> Compare workload, coverage, efficiency and satisfaction.", "<b>Improve seating utilization:</b> Monitor table utilization alongside waiting times.", "<b>Monitor continuously:</b> Use the Power BI dashboard to track KPIs and evaluate corrective actions."],
        v: "Gives stakeholders a clearer view of restaurant operations, highlights measurable service and inventory issues, and offers data-backed recommendations. It establishes a baseline for monitoring; actual reductions in waiting times or stock-outs were not measured as outcomes of implemented changes."
    },
    {
        id: "ecom", ic: "🛒", t: "E-commerce Sales Analysis", g: "linear-gradient(135deg,#0f3d63,#2a0f4a)", img: [4, 5], tools: ["Python", "Pandas", "Excel / Google Sheets", "MySQL", "Power BI"],
        s: "Cleaned and analyzed sales data to find top products, regional performance, returns and customer activity, with a Power BI dashboard.",
        ov: "Analyzed e-commerce sales data to understand sales performance, identify top-selling products, examine customer purchasing activity, and compare sales across regions using data cleaning, SQL, spreadsheet analysis and Power BI.",
        q: "How can an e-commerce business use sales and order data to identify top-performing products, understand regional sales performance, monitor returns, and make more informed business decisions?",
        pr: ["<b>Sales performance:</b> Total and average sales, overall performance.", "<b>Product performance:</b> Highest sales and most units sold.", "<b>Regional performance:</b> Which countries or regions contribute most.", "<b>Order &amp; customer activity:</b> Orders, customers and quantities.", "<b>Product returns:</b> How much quantity is returned and what to monitor."],
        ap: ["<b>Data cleaning:</b> Python with Pandas to inspect and prepare data.", "<b>Spreadsheet analysis:</b> Google Sheets and Excel review.", "<b>SQL querying:</b> MySQL for total/average sales, top 10 products, best-selling quantities, returns, orders, customers and regional sales.", "<b>Dashboard:</b> Power BI for KPIs, product performance and regional comparison.", "<b>Business interpretation:</b> Highlighted top products and regions."],
        kp: [["UK", "leading region in top-10 sales"], ["Top 10", "products by sales identified"], ["KPI", "dashboard: sales, orders, customers"]],
        f: ["The United Kingdom emerged as the leading region among the top 10 sales results examined.", "Identified the top 10 products by sales and best-sellers by units sold.", "Analyzed returned quantities to understand the scale of returns.", "Consolidated sales, order, customer, quantity and regional metrics in Power BI.", "Further analysis is needed to explain why products or regions perform better and whether patterns persist over time."],
        r: ["<b>Focus on high performers:</b> Review top sellers for inventory and merchandising.", "<b>Investigate regional opportunities:</b> Compare the UK with other regions.", "<b>Monitor returns:</b> Track returned quantities by product; investigate quality, fulfilment or description issues.", "<b>Improve sales reporting:</b> Consistent dashboard for sales, orders, customers and quantities.", "<b>Support inventory planning:</b> Use historical demand, considering seasonality, stock and lead times.", "<b>Expand analysis:</b> Add profitability, trends, retention and return-rate analysis."],
        v: "Established a foundation for sales reporting by organizing e-commerce data, answering practical questions with SQL, and presenting key metrics in an interactive dashboard."
    },
    {
        id: "sc", ic: "🚚", t: "Supply Chain & Logistics", g: "linear-gradient(135deg,#0b2b4a,#10303a)", img: [], tools: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn"],
        s: "Explored 32,065 logistics records to understand delivery delays and route risk, and found weak predictive power due to low correlations.",
        ov: "Analyzed 32,065 supply-chain and logistics records (26 columns) to investigate delivery delays, route-risk classifications and operational patterns. Used Python for cleaning, EDA and machine learning experiments to assess whether the data could reliably explain or predict delivery outcomes.",
        q: "What operational and time-based patterns are associated with supply-chain delivery delays and route risk, and can the available data reliably identify high-risk deliveries to support better logistics planning?",
        pr: ["<b>Delivery delays:</b> How often were deliveries late and how did delays vary over time?", "<b>Route risk:</b> Distribution across high-, moderate- and low-risk classes.", "<b>Operational patterns:</b> Meaningful relationships with delivery performance?", "<b>Predictive reliability:</b> Could ML reliably classify risk or predict delays?", "<b>Decision-making limits:</b> Was the dataset informative enough?"],
        ap: ["<b>Data cleaning:</b> Checked structure, types, duplicates and timestamp issues.", "<b>EDA:</b> Delays by month, weekday and hour.", "<b>Risk analysis:</b> Route-risk distribution and operational variables.", "<b>Correlation analysis:</b> Relationships were generally very weak.", "<b>Machine learning:</b> Scikit-learn classification and regression, evaluated with accuracy, MAE, RMSE and R²."],
        kp: [["82.1%", "26,323 records classified late"], ["74.7%", "23,944 high-risk records"], ["< 0.02", "absolute correlations"], ["40.5%", "Random Forest accuracy (balanced: 39.1%)"]],
        f: ["Numerical correlations were generally close to zero.", "The delay classifier reached ~82% accuracy but predicted “late” for every record, so accuracy alone was misleading.", "The delivery-time deviation regression had a negative R², worse than predicting the mean.", "The recorded delay rate is a dataset finding, not the real-world late-delivery rate of an entire operation."],
        r: ["<b>Investigate delays:</b> Validate status definitions; examine by period, region and other dimensions.", "<b>Improve data quality:</b> Validate timestamps, targets and measurements; add reliable shipment, route and event identifiers.", "<b>Strengthen risk monitoring:</b> Validate risk criteria against independently measured outcomes.", "<b>Avoid premature automation:</b> Don’t deploy the tested models without further validation.", "<b>Collect richer data:</b> Planned vs actual times, shipment history, documented disruptions.", "<b>Use better metrics:</b> Precision, recall, F1, confusion matrices, baselines and unseen-data tests."],
        v: "Established a baseline view of recorded delays and risk classes, assessed the dataset’s limitations, and showed where data quality needs work. Rather than presenting an unreliable model as a solution, it provides evidence to guide better data collection and logistics analytics."
    },
    {
        id: "ab", ic: "⚫", t: "A/B Testing – Website Background", g: "linear-gradient(135deg,#1a1a3a,#4a1a5a)", img: [], tools: ["Python", "SQL", "Hypothesis Testing", "Power BI"],
        s: "Compared black vs white website backgrounds and found a 160.6% higher observed conversion rate for black (statistically significant).",
        ov: "Conducted an A/B testing case study comparing black and white website backgrounds, identifying a 160.6% higher observed conversion rate for the black-background variant and recommending data-driven website optimization.",
        q: "Does website background colour (white vs. black) influence user engagement and conversion rates?",
        pr: ["Compare sample sizes for both groups.", "Calculate average and median time spent.", "Test whether the average time-spent difference is statistically significant.", "Calculate conversion counts and conversion rates.", "Test whether conversion rates differ significantly.", "Translate the results into a cautious stakeholder recommendation."],
        ap: [], kp: [["14.07%", "Black conversion (349 / 2,481)"], ["5.40%", "White conversion (136 / 2,519)"], ["+160.55%", "relative lift (+8.67 pp)"], ["p = 0.6387", "time spent: not significant"]],
        f: ["Mean time spent: Black 243.30 vs White 241.73 (difference 1.57 units); t = 0.4695, p = 0.6387, not significant.", "Reported conversion difference is significant: z = 10.3545, p = 3.99 × 10⁻²⁵.", "Overall: a strong observed conversion-rate association, but no significant difference in average time spent."],
        tb: [["Does Black have a higher observed conversion rate?", "Yes: 14.07% vs 5.40%."], ["Is the reported conversion difference significant?", "Yes; z = 10.3545, p = 3.99 × 10⁻²⁵."], ["Is average time higher for Black?", "Descriptively yes: 243.30 vs 241.73."], ["Is the time difference significant?", "No; p = 0.6387."], ["Should White be immediately replaced?", "No; validate with a randomized real-world test first."]],
        r: ["Validate the conversion finding in a randomized real-world experiment.", "Check accessibility and user experience before any rollout.", "Do not replace the white variant immediately."],
        v: "Demonstrates an end-to-end analytics workflow: define the business question, inspect and clean data, compare groups, run statistical tests, visualize outcomes and recommend next steps, using a synthetic dataset."
    }];
const $ = s => document.querySelector(s), L = a => "<ul>" + a.map(x => "<li>" + x + "</li>").join("") + "</ul>";
$("#edu").innerHTML = EDU.map(e => `<div class="glass"><h3>${e[0]}</h3><span class="mu">${e[1]}</span></div>`).join("");
$("#sk").innerHTML = SK.map(s => `<div class="glass">${s}</div>`).join("");
$("#pg").innerHTML = P.map((p, i) => `<div class="glass pc rv" data-i="${i}"><div class="th" style="background-image:${p.img.length ? `linear-gradient(#0000,#03030fcc),url(${IM[p.img[0]]})` : p.g}">${p.img.length ? "" : p.ic}</div><div class="b"><h3>${p.t}</h3><div class="chips">${p.tools.slice(0, 4).map(t => `<span class="chip">${t}</span>`).join("")}</div><p>${p.s}</p><span class="btn">View more</span></div></div>`).join("");
function open_(i) {
    const p = P[i]; $("#cb").innerHTML = `<p class="tag">Case study</p><h1 style="font-size:clamp(2rem,5vw,3.4rem)"><span>${p.t}</span></h1><div class="chips">${p.tools.map(t => `<span class="chip">${t}</span>`).join("")}</div>
<div class="glass"><h3>Overview</h3>${p.ov}</div>
<div class="kp">${p.kp.map(k => `<div class="glass"><b>${k[0]}</b><span class="mu">${k[1]}</span></div>`).join("")}</div>
<div class="blk glass"><h3>1. Business Question</h3><b>${p.q}</b></div>
<div class="blk glass"><h3>2. ${i == 3 ? "Objectives" : "Business Problems Investigated"}</h3>${L(p.pr)}</div>
${p.ap.length ? `<div class="blk glass"><h3>3. How I Approached It</h3>${L(p.ap)}</div>` : ""}
<div class="blk glass"><h3>4. Key Findings</h3>${L(p.f)}</div>
${p.tb ? `<div class="blk glass"><h3>Quick Answers</h3><table>${p.tb.map(r => `<tr><td>${r[0]}</td><td>${r[1]}</td></tr>`).join("")}</table></div>` : ""}
<div class="blk glass"><h3>5. Recommendations</h3>${L(p.r)}</div>
<div class="blk glass"><h3>6. ${i == 3 ? "Final Conclusion" : "Business Impact"}</h3>${p.v}</div>
${p.img.length ? `<div class="blk"><h3>Dashboard Screenshots</h3><div class="shots">${p.img.map(k => `<img loading="lazy" src="${IM[k]}" alt="Dashboard screenshot">`).join("")}</div></div>` : ""}
<div class="blk"><a class="btn"href="https://github.com/merliningithub?tab=repositories">View Code</a></div>`;
    $("#cs").classList.add("o"); $("#cs").scrollTop = 0; document.body.style.overflow = "hidden"
}
document.addEventListener("click", e => { const c = e.target.closest(".pc"); if (c) open_(+c.dataset.i) });
$("#cx").onclick = () => { $("#cs").classList.remove("o"); document.body.style.overflow = "" };
addEventListener("keydown", e => { if (e.key == "Escape") $("#cx").click() });


const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && e.target.classList.add("in")), { threshold: .12 }); document.querySelectorAll(".rv").forEach(x => io.observe(x));


/* ===== 3D space ===== */
try {
    const cv = $("#c"), R = new THREE.WebGLRenderer({ canvas: cv, antialias: true, alpha: true }); R.setPixelRatio(Math.min(devicePixelRatio, 2));
    const S = new THREE.Scene(), C = new THREE.PerspectiveCamera(60, 1, .1, 2000); S.fog = new THREE.FogExp2(0x03030f, .0035);
    const st = n => { const g = new THREE.BufferGeometry(), a = new Float32Array(n * 3); for (let i = 0; i < n; i++) { a[i * 3] = (Math.random() - .5) * 300; a[i * 3 + 1] = (Math.random() - .5) * 200; a[i * 3 + 2] = 40 - Math.random() * 520 } g.setAttribute("position", new THREE.BufferAttribute(a, 3)); return g };
    const stars = new THREE.Points(st(4500), new THREE.PointsMaterial({ size: .55, color: 0xcfd8ff, transparent: true, opacity: .9, depthWrite: false })); S.add(stars);
    const tex = (f) => { const c = document.createElement("canvas"); c.width = 512; c.height = 256; const x = c.getContext("2d"); f(x); return new THREE.CanvasTexture(c) };
    const earthT = tex(x => { x.fillStyle = "#0b3a8c"; x.fillRect(0, 0, 512, 256); for (let i = 0; i < 90; i++) { x.fillStyle = `rgba(${20 + Math.random() * 40},${90 + Math.random() * 80},${50 + Math.random() * 40},.85)`; x.beginPath(); x.ellipse(Math.random() * 512, 30 + Math.random() * 196, 8 + Math.random() * 34, 5 + Math.random() * 18, Math.random() * 3, 0, 7); x.fill() } for (let i = 0; i < 70; i++) { x.fillStyle = "rgba(255,255,255,.18)"; x.beginPath(); x.ellipse(Math.random() * 512, Math.random() * 256, 20 + Math.random() * 50, 3 + Math.random() * 7, 0, 0, 7); x.fill() } });
    const glow = c => new THREE.ShaderMaterial({ uniforms: { c: { value: new THREE.Color(c) } }, vertexShader: "varying vec3 n;void main(){n=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}", fragmentShader: "uniform vec3 c;varying vec3 n;void main(){float i=pow(.72-dot(n,vec3(0,0,1.)),3.);gl_FragColor=vec4(c,1.)*i*1.6;}", side: THREE.BackSide, blending: THREE.AdditiveBlending, transparent: true, depthWrite: false });
    const planet = (r, x, y, z, mat, gc) => { const g = new THREE.Group(), m = new THREE.Mesh(new THREE.SphereGeometry(r, 48, 48), mat); g.add(m, new THREE.Mesh(new THREE.SphereGeometry(r * 1.16, 48, 48), glow(gc))); g.position.set(x, y, z); S.add(g); return { g, m } };
    const earth = planet(7, 12, 1, -6, new THREE.MeshStandardMaterial({ map: earthT, roughness: .9 }), 0x3a7bff);
    const pT = tex(x => { const g = x.createLinearGradient(0, 0, 0, 256);["#3b2a7a", "#8f6bff", "#2a1d5c", "#b08bff", "#2e2170"].forEach((c, i) => g.addColorStop(i / 4, c)); x.fillStyle = g; x.fillRect(0, 0, 512, 256) });
    const ring = planet(6, -15, -2, -90, new THREE.MeshStandardMaterial({ map: pT, roughness: .8 }), 0x8f6bff);
    const rg = new THREE.Mesh(new THREE.RingGeometry(8.5, 13, 96), new THREE.MeshBasicMaterial({ color: 0xb9a6ff, side: 2, transparent: true, opacity: .45 })); rg.rotation.x = 1.25; rg.rotation.y = .3; ring.g.add(rg);
    const red = planet(3, 14, 3, -170, new THREE.MeshStandardMaterial({ color: 0xc0432e, roughness: 1 }), 0xff6a3a);
    const blue = planet(9, -18, -3, -260, new THREE.MeshStandardMaterial({ color: 0x2459c9, roughness: .7 }), 0x4fa3ff);
    const moon = planet(1.6, 2, 5, -330, new THREE.MeshStandardMaterial({ color: 0xcfcfe6, roughness: 1 }), 0xaabbff);
    S.add(new THREE.AmbientLight(0x6670ff, .55)); const sun = new THREE.DirectionalLight(0xffffff, 1.6); sun.position.set(-20, 15, 30); S.add(sun);
    const nb = (c, x, y, z, s) => { const t = tex(q => { const g = q.createRadialGradient(256, 128, 0, 256, 128, 128); g.addColorStop(0, c); g.addColorStop(1, "rgba(0,0,0,0)"); q.fillStyle = g; q.fillRect(0, 0, 512, 256) }); const m = new THREE.Sprite(new THREE.SpriteMaterial({ map: t, transparent: true, opacity: .55, depthWrite: false, blending: THREE.AdditiveBlending })); m.position.set(x, y, z); m.scale.set(s, s / 2, 1); S.add(m) };
    nb("rgba(90,60,255,.8)", -20, 10, -40, 120); nb("rgba(40,120,255,.7)", 25, -10, -130, 140); nb("rgba(190,70,255,.6)", -10, 8, -220, 150);
    const rs = () => { R.setSize(innerWidth, innerHeight, false); C.aspect = innerWidth / innerHeight; C.updateProjectionMatrix() }; addEventListener("resize", rs); rs();
    let tp = 0, p = 0, mx = 0, my = 0, sx = 0, sy = 0, last = 0; const T = () => Math.max(1, document.body.scrollHeight - innerHeight);
    addEventListener("scroll", () => {
        tp = scrollY / T(); $("#bar").style.width = tp * 100 + "%"; $("#hint").style.opacity = scrollY > 80 ? 0 : 1;
        let cur = "home"; document.querySelectorAll("section").forEach(s => { if (s.getBoundingClientRect().top < innerHeight * .5) cur = s.id }); document.querySelectorAll("nav a").forEach(a => a.classList.toggle("on", a.getAttribute("href") == "#" + cur))
    }, { passive: true });
    addEventListener("pointermove", e => { mx = e.clientX / innerWidth - .5; my = e.clientY / innerHeight - .5 }, { passive: true });
    const cards = () => document.querySelectorAll(".pc");
    document.addEventListener("pointermove", e => { const c = e.target.closest && e.target.closest(".pc"); cards().forEach(k => k.style.transform = ""); if (c) { const r = c.getBoundingClientRect(); c.style.transform = `perspective(700px) rotateY(${((e.clientX - r.left) / r.width - .5) * 12}deg) rotateX(${-((e.clientY - r.top) / r.height - .5) * 12}deg) translateZ(10px)` } });
    const clk = new THREE.Clock();
    (function a() {
        const t = clk.getElapsedTime(), d = tp - p; p += d * .06; sx += (mx - sx) * .05; sy += (my - sy) * .05;
        C.position.set(sx * 6, -sy * 4 - p * 4, 34 - p * 390); C.lookAt(sx * 6 * .6 + (p * -6), -sy * 2, C.position.z - 30); C.fov = 60 + Math.min(Math.abs(d) * 900, 28); C.updateProjectionMatrix();
        earth.m.rotation.y = t * .05; ring.m.rotation.y = t * .08; rg.rotation.z = t * .02; blue.m.rotation.y = t * .04; stars.rotation.z = t * .004;
        earth.g.position.y = 1 + Math.sin(t * .5) * .4; R.render(S, C); requestAnimationFrame(a)
    })();
} catch (e) { document.getElementById("c").style.background = "radial-gradient(circle at 70% 40%,#13245c,#03030f 70%)" }
