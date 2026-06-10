const STORAGE_KEY = "finaccord-business-assistant-v2";

const seedData = {
  businesses: [
    {
      id: "dataannotation",
      name: "DataAnnotation",
      shortName: "DA",
      type: "AI finance work platform",
      status: "Waiting for work",
      statusTone: "waiting",
      url: "https://app.dataannotation.tech/workers/starter_assessment_complete",
      accountEmail: "kfrem@hotmail.com",
      currentPosition:
        "Your starter assessment and expertise profile have been completed. No project has been assigned yet.",
      nextAction:
        "Check the platform and Hotmail for approval, a qualification test, or a project invitation.",
      nextDate: "2026-06-17",
      value: "Project dependent",
      completed: [
        "Starter assessment completed",
        "Finance and accounting expertise added",
        "LinkedIn and professional profile information added",
        "ACCA/FCCA credential recorded",
      ],
      outstanding: [
        "Wait for DataAnnotation to review the account",
        "Complete any new qualification personally if one appears",
        "Add PayPal details personally when payment setup becomes available",
      ],
      healthCheck:
        "The account is working if the dashboard opens, your profile remains visible, and no warning or request for missing information appears.",
    },
    {
      id: "mercor",
      name: "Mercor",
      shortName: "M",
      type: "AI expert work platform",
      status: "Interview required",
      statusTone: "action",
      url: "https://work.mercor.com/home?tab=assessments",
      accountEmail: "kfrem@hotmail.com",
      currentPosition:
        "Your finance profile is substantially completed. The Domain Expert Interview is the main remaining requirement.",
      nextAction:
        "Prepare for and personally complete the Finance and Banking Domain Expert Interview.",
      nextDate: "2026-06-13",
      value: "$90-$110 per hour",
      completed: [
        "Mercor account and email verified",
        "Finance and banking expertise entered",
        "FCCA qualification and work evidence entered",
        "Profile reviewed for relevant AI finance work",
      ],
      outstanding: [
        "Prepare for the Domain Expert Interview",
        "Complete the interview personally",
        "Complete optional LinkedIn verification",
        "Monitor Hotmail for interview results or opportunities",
      ],
      healthCheck:
        "The account is working if the assessments page opens and the interview is shown. After completion, check that its status changes from pending.",
    },
    {
      id: "finance-jobs",
      name: "Finance Job Applications",
      shortName: "FJ",
      type: "Employment and contract work",
      status: "Applications active",
      statusTone: "active",
      url: "https://www.linkedin.com/jobs/",
      accountEmail: "Use the email saved on each job platform",
      currentPosition:
        "Specialist CV versions are available for Financial Controller, finance transformation, SaaS, fintech, and multi-entity roles.",
      nextAction:
        "Review current applications and submit targeted applications using the most relevant CV version.",
      nextDate: "2026-06-12",
      value: "£65,000+ target",
      completed: [
        "Core CV and specialist CV versions prepared",
        "FCCA qualification clearly presented",
        "AI finance and financial control experience highlighted",
      ],
      outstanding: [
        "Record every submitted application",
        "Track recruiter replies and interview dates",
        "Follow up on applications with no response",
      ],
      healthCheck:
        "Each application should have a company, job title, date applied, CV used, current status, and next follow-up date.",
    },
    {
      id: "fiverr",
      name: "Fiverr Freelance Business",
      shortName: "FV",
      type: "Freelance marketplace",
      status: "Needs rebuild",
      statusTone: "action",
      url: "https://pro.fiverr.com/users/godfredfrimpong/manage_gigs?source=side_navigation",
      accountEmail: "kfrem@hotmail.com",
      currentPosition:
        "Seller mode is active. The profile is partly built, but the current positioning is too narrow and one paused gig plus one draft gig show 0 impressions, 0 clicks and 0 orders.",
      nextAction:
        "Rebuild the Fiverr profile and replace the weak gigs with three focused, AI-assisted English-only services.",
      nextDate: "2026-06-11",
      value: "30-day target: £1,000+",
      completed: [
        "Seller account confirmed for @godfredfrimpong",
        "Profile strength checked at 10/12",
        "Existing profile copy and gig status reviewed",
        "One paused gig and one draft gig identified with no traction",
      ],
      outstanding: [
        "Confirm how many hours per day can be used for Fiverr delivery",
        "Select and build the three strongest gig niches",
        "Rewrite the profile without protected accountancy wording",
        "Create paste-ready gig titles, descriptions, packages, FAQs and buyer requirements",
        "Prepare daily Briefs response templates and AI delivery prompts",
      ],
      healthCheck:
        "The Fiverr business is working when there are three active gigs, profile strength is complete, impressions and clicks start appearing, and daily Briefs responses are being sent.",
    },
  ],
  tasks: [
    {
      id: "fiverr-hours",
      businessId: "fiverr",
      title: "Confirm daily Fiverr working hours",
      detail: "The gig plan and 30-day revenue calendar depend on available daily delivery time.",
      dueDate: "2026-06-10",
      priority: "high",
      status: "Open",
    },
    {
      id: "fiverr-rebuild",
      businessId: "fiverr",
      title: "Rebuild Fiverr profile and three gigs",
      detail: "Replace current weak positioning with focused AI-assisted services for first revenue.",
      dueDate: "2026-06-11",
      priority: "high",
      status: "Open",
    },
    {
      id: "mercor-interview",
      businessId: "mercor",
      title: "Prepare for and complete the Mercor interview",
      detail: "This is the most important action needed before Mercor can offer work.",
      dueDate: "2026-06-13",
      priority: "high",
      status: "Open",
    },
    {
      id: "finance-review",
      businessId: "finance-jobs",
      title: "Review finance job applications",
      detail: "Record applications, replies, interviews, and the next follow-up date.",
      dueDate: "2026-06-12",
      priority: "normal",
      status: "Open",
    },
    {
      id: "dataannotation-check",
      businessId: "dataannotation",
      title: "Check DataAnnotation and Hotmail",
      detail: "Look for approval, a qualification test, or a project invitation.",
      dueDate: "2026-06-17",
      priority: "waiting",
      status: "Waiting",
    },
    {
      id: "paypal",
      businessId: "dataannotation",
      title: "Add PayPal details when requested",
      detail: "Payment account details must be completed personally.",
      dueDate: "",
      priority: "normal",
      status: "Open",
    },
  ],
  history: [
    {
      id: "history-1",
      businessId: "dataannotation",
      date: "2026-06-10",
      note: "Starter assessment completed. Expertise, LinkedIn, and ACCA/FCCA details reviewed.",
    },
    {
      id: "history-2",
      businessId: "mercor",
      date: "2026-06-10",
      note: "Account verified and finance expert profile completed. Domain interview remains outstanding.",
    },
    {
      id: "history-3",
      businessId: "finance-jobs",
      date: "2026-06-10",
      note: "Finance-focused CV collection prepared for targeted applications.",
    },
    {
      id: "history-4",
      businessId: "fiverr",
      date: "2026-06-10",
      note: "Fiverr seller account inspected. Username @godfredfrimpong, profile strength 10/12, one paused gig and one draft gig found with no activity.",
    },
  ],
};

let state = loadState();

const elements = {
  greeting: document.querySelector("#greeting"),
  todayLabel: document.querySelector("#todayLabel"),
  openTaskCount: document.querySelector("#openTaskCount"),
  todayList: document.querySelector("#todayList"),
  businessList: document.querySelector("#businessList"),
  historyList: document.querySelector("#historyList"),
  businessDialog: document.querySelector("#businessDialog"),
  dialogType: document.querySelector("#dialogType"),
  dialogTitle: document.querySelector("#dialogTitle"),
  businessDetails: document.querySelector("#businessDetails"),
  updateDialog: document.querySelector("#updateDialog"),
  updateForm: document.querySelector("#updateForm"),
  toast: document.querySelector("#toast"),
};

function cloneSeed() {
  return JSON.parse(JSON.stringify(seedData));
}

function loadState() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return cloneSeed();
    const parsed = JSON.parse(stored);
    return {
      businesses: seedData.businesses,
      tasks: mergeById(seedData.tasks, parsed.tasks),
      history: mergeById(seedData.history, parsed.history),
    };
  } catch {
    return cloneSeed();
  }
}

function mergeById(seedItems, storedItems = []) {
  const storedById = new Map(storedItems.map((item) => [item.id, item]));
  const merged = seedItems.map((item) => storedById.get(item.id) || item);
  const seedIds = new Set(seedItems.map((item) => item.id));
  const extras = storedItems.filter((item) => !seedIds.has(item.id));
  return [...merged, ...extras];
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatDate(value) {
  if (!value) return "No date set";
  return new Date(`${value}T12:00:00`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function getBusiness(id) {
  return state.businesses.find((business) => business.id === id);
}

function openTasks() {
  return state.tasks.filter((task) => task.status !== "Completed");
}

function render() {
  setDateAndGreeting();
  renderTasks();
  renderBusinesses();
  renderHistory();
  populateBusinessSelect();
}

function setDateAndGreeting() {
  const now = new Date();
  const hour = now.getHours();
  const greeting = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";
  elements.greeting.textContent = `${greeting}, Godfred`;
  elements.todayLabel.textContent = now.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
  const count = openTasks().length;
  elements.openTaskCount.textContent = `${count} ${count === 1 ? "task" : "tasks"}`;
}

function sortedTasks() {
  const rank = { high: 0, normal: 1, waiting: 2 };
  return openTasks().sort((a, b) => {
    if (rank[a.priority] !== rank[b.priority]) return rank[a.priority] - rank[b.priority];
    if (!a.dueDate) return 1;
    if (!b.dueDate) return -1;
    return a.dueDate.localeCompare(b.dueDate);
  });
}

function renderTasks() {
  const tasks = sortedTasks();
  elements.todayList.innerHTML = tasks.length
    ? tasks
        .map((task, index) => {
          const business = getBusiness(task.businessId);
          return `
            <article class="task-row ${escapeHtml(task.priority)}">
              <span class="task-number">${index + 1}</span>
              <div class="task-main">
                <strong>${escapeHtml(task.title)}</strong>
                <span>${escapeHtml(business?.name || "General")} · ${escapeHtml(task.detail)}</span>
              </div>
              <div class="task-actions">
                <span class="due">${task.dueDate ? `By ${escapeHtml(formatDate(task.dueDate))}` : "When available"}</span>
                <a class="button primary small" href="${escapeHtml(business?.url || "#")}" target="_blank" rel="noopener noreferrer">
                  Open website
                </a>
              </div>
            </article>
          `;
        })
        .join("")
    : '<div class="empty">Nothing is outstanding today.</div>';
}

function renderBusinesses() {
  elements.businessList.innerHTML = state.businesses
    .map((business) => {
      const remaining = state.tasks.filter(
        (task) => task.businessId === business.id && task.status !== "Completed",
      ).length;
      return `
        <article class="business-card">
          <div class="business-card-top">
            <div class="business-logo">${escapeHtml(business.shortName)}</div>
            <div>
              <div class="business-title-row">
                <h3>${escapeHtml(business.name)}</h3>
                <span class="status ${escapeHtml(business.statusTone)}">${escapeHtml(business.status)}</span>
              </div>
              <p class="business-summary">${escapeHtml(business.currentPosition)}</p>
            </div>
            <div class="button-stack">
              <a class="button primary" href="${escapeHtml(business.url)}" target="_blank" rel="noopener noreferrer">
                Continue this work
              </a>
              <button class="button outline view-business" data-business-id="${escapeHtml(business.id)}">
                See full details
              </button>
            </div>
          </div>
          <div class="business-facts">
            <div class="fact">
              <span>Login email</span>
              <strong>${escapeHtml(business.accountEmail)}</strong>
            </div>
            <div class="fact">
              <span>Next action</span>
              <strong>${escapeHtml(business.nextAction)}</strong>
            </div>
            <div class="fact">
              <span>Check again</span>
              <strong>${escapeHtml(formatDate(business.nextDate))}</strong>
            </div>
            <div class="fact">
              <span>Still outstanding</span>
              <strong>${remaining} ${remaining === 1 ? "task" : "tasks"}</strong>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderHistory() {
  const records = [...state.history].sort((a, b) => b.date.localeCompare(a.date));
  elements.historyList.innerHTML = records.length
    ? records
        .map((record) => {
          const business = getBusiness(record.businessId);
          return `
            <article class="history-row">
              <span class="history-date">${escapeHtml(formatDate(record.date))}</span>
              <span class="history-business">${escapeHtml(business?.name || "General")}</span>
              <span class="history-note">${escapeHtml(record.note)}</span>
            </article>
          `;
        })
        .join("")
    : '<div class="empty">No work history has been recorded.</div>';
}

function showBusiness(id) {
  const business = getBusiness(id);
  if (!business) return;
  elements.dialogType.textContent = business.type.toUpperCase();
  elements.dialogTitle.textContent = business.name;
  elements.businessDetails.innerHTML = `
    <div class="next-box">
      <span>WHERE YOU ARE NOW</span>
      <strong>${escapeHtml(business.currentPosition)}</strong>
    </div>
    <section class="progress-section">
      <h3>Completed</h3>
      <ul class="check-list">
        ${business.completed.map((item) => `<li class="done">${escapeHtml(item)}</li>`).join("")}
      </ul>
    </section>
    <section class="progress-section">
      <h3>Still to do</h3>
      <ul class="check-list">
        ${business.outstanding.map((item) => `<li class="open">${escapeHtml(item)}</li>`).join("")}
      </ul>
    </section>
    <div class="next-box">
      <span>NEXT ACTION</span>
      <strong>${escapeHtml(business.nextAction)}</strong>
    </div>
    <div class="account-box">
      <span>LOGIN ACCOUNT</span>
      <strong>${escapeHtml(business.accountEmail)}</strong>
      <p>Your password remains in your browser password manager and is not published here.</p>
    </div>
    <div class="account-box">
      <span>HOW TO CHECK IT IS WORKING</span>
      <strong>${escapeHtml(business.healthCheck)}</strong>
    </div>
    <div class="dialog-buttons">
      <a class="button primary" href="${escapeHtml(business.url)}" target="_blank" rel="noopener noreferrer">Open ${escapeHtml(business.name)}</a>
      <a class="button outline" href="https://passwords.google.com/" target="_blank" rel="noopener noreferrer">Open password manager</a>
    </div>
  `;
  elements.businessDialog.showModal();
}

function populateBusinessSelect() {
  const select = elements.updateForm.elements.businessId;
  select.innerHTML = state.businesses
    .map((business) => `<option value="${escapeHtml(business.id)}">${escapeHtml(business.name)}</option>`)
    .join("");
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("show");
  window.setTimeout(() => elements.toast.classList.remove("show"), 2200);
}

document.addEventListener("click", (event) => {
  const businessButton = event.target.closest(".view-business");
  if (businessButton) showBusiness(businessButton.dataset.businessId);
});

document.querySelector("#closeBusinessDialog").addEventListener("click", () => {
  elements.businessDialog.close();
});

document.querySelector("#addUpdateButton").addEventListener("click", () => {
  elements.updateForm.reset();
  elements.updateForm.elements.date.value = new Date().toISOString().slice(0, 10);
  elements.updateDialog.showModal();
});

document.querySelectorAll(".close-update").forEach((button) => {
  button.addEventListener("click", () => elements.updateDialog.close());
});

elements.updateForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(elements.updateForm);
  state.history.push({
    id: `history-${Date.now()}`,
    businessId: data.get("businessId"),
    date: data.get("date"),
    note: data.get("note").trim(),
  });
  saveState();
  renderHistory();
  elements.updateDialog.close();
  showToast("Update saved on this device.");
});

document.querySelector("#copyUpdatePrompt").addEventListener("click", async () => {
  const prompt =
    "Update my Business House dashboard. Business: [name]. Work completed: [what I did]. Result or response: [what happened]. What remains: [next action]. Next check or deadline: [date]. Please update the history, current position, tasks and publish the dashboard.";
  try {
    await navigator.clipboard.writeText(prompt);
    showToast("Update instructions copied.");
  } catch {
    showToast("Tell Codex the business, result, next action and date.");
  }
});

render();
