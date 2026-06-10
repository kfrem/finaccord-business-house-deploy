const STORAGE_KEY = "finaccord-business-house-v1";

const OPPORTUNITY_TYPES = [
  "AI platform",
  "Finance role",
  "Consulting",
  "Contract",
  "Business lead",
  "Partnership",
  "Other",
];

const OPPORTUNITY_STATUSES = [
  "Profile setup",
  "Assessment",
  "Under review",
  "Qualified",
  "Active",
  "Waiting",
  "Closed",
];

const seedData = {
  opportunities: [
    {
      id: "opp-mercor",
      name: "Finance & Banking Expert",
      company: "Mercor",
      type: "AI platform",
      status: "Assessment",
      value: "$90-$110/hour",
      reviewDate: "2026-06-13",
      url: "https://work.mercor.com/",
      notes:
        "Profile completed with finance expertise, FCCA credentials and project evidence. Domain Expert Interview remains personal action.",
      createdAt: "2026-06-10T08:00:00.000Z",
      updatedAt: "2026-06-10T08:00:00.000Z",
    },
    {
      id: "opp-dataannotation",
      name: "Finance and Accounting AI Evaluator",
      company: "DataAnnotation",
      type: "AI platform",
      status: "Under review",
      value: "Project dependent",
      reviewDate: "2026-06-17",
      url: "https://app.dataannotation.tech/workers/starter_assessment_complete",
      notes:
        "Starter assessment completed. Profile, skills, LinkedIn and ACCA credential saved. Awaiting platform review and project allocation.",
      createdAt: "2026-06-10T09:00:00.000Z",
      updatedAt: "2026-06-10T09:00:00.000Z",
    },
    {
      id: "opp-pipeline",
      name: "Financial Controller Applications",
      company: "UK job market",
      type: "Finance role",
      status: "Active",
      value: "£65,000+ target",
      reviewDate: "2026-06-12",
      url: "",
      notes:
        "Continue targeted applications across SaaS, fintech and multi-entity finance roles using the current specialist CV variants.",
      createdAt: "2026-06-10T09:15:00.000Z",
      updatedAt: "2026-06-10T09:15:00.000Z",
    },
  ],
  actions: [
    {
      id: "act-mercor-interview",
      opportunityId: "opp-mercor",
      title: "Prepare for and personally complete Mercor Domain Expert Interview",
      priority: "High",
      dueDate: "2026-06-13",
      status: "Outstanding",
      notes:
        "Refresh month-end close, IFRS/FRS 102, cash flow, controls, variance analysis and AI financial reasoning.",
      createdAt: "2026-06-10T09:20:00.000Z",
    },
    {
      id: "act-dataannotation-monitor",
      opportunityId: "opp-dataannotation",
      title: "Monitor Hotmail for DataAnnotation approval or further assessment",
      priority: "Medium",
      dueDate: "2026-06-17",
      status: "Waiting",
      notes: "Check inbox and spam folder. No further account action is currently available.",
      createdAt: "2026-06-10T09:22:00.000Z",
    },
    {
      id: "act-paypal",
      opportunityId: "opp-dataannotation",
      title: "Confirm PayPal account details personally",
      priority: "Medium",
      dueDate: "",
      status: "Outstanding",
      notes: "Payment account setup is intentionally reserved for the account owner.",
      createdAt: "2026-06-10T09:24:00.000Z",
    },
    {
      id: "act-linkedin",
      opportunityId: "opp-mercor",
      title: "Complete optional LinkedIn verification on Mercor",
      priority: "Low",
      dueDate: "",
      status: "Outstanding",
      notes: "Mercor states verified LinkedIn profiles receive more offers.",
      createdAt: "2026-06-10T09:26:00.000Z",
    },
  ],
};

let state = loadState();

const elements = {
  views: {
    dashboard: document.querySelector("#dashboardView"),
    opportunities: document.querySelector("#opportunitiesView"),
    actions: document.querySelector("#actionsView"),
  },
  pageTitle: document.querySelector("#pageTitle"),
  navItems: document.querySelectorAll(".nav-item"),
  metricGrid: document.querySelector("#metricGrid"),
  priorityList: document.querySelector("#priorityList"),
  stageChart: document.querySelector("#stageChart"),
  recentOpportunities: document.querySelector("#recentOpportunities"),
  opportunityGrid: document.querySelector("#opportunityGrid"),
  actionBoard: document.querySelector("#actionBoard"),
  navOpportunityCount: document.querySelector("#navOpportunityCount"),
  navActionCount: document.querySelector("#navActionCount"),
  heroActionCount: document.querySelector("#heroActionCount"),
  todayLabel: document.querySelector("#todayLabel"),
  lastSaved: document.querySelector("#lastSaved"),
  opportunityDialog: document.querySelector("#opportunityDialog"),
  opportunityForm: document.querySelector("#opportunityForm"),
  opportunityDialogTitle: document.querySelector("#opportunityDialogTitle"),
  deleteOpportunityButton: document.querySelector("#deleteOpportunityButton"),
  actionDialog: document.querySelector("#actionDialog"),
  actionForm: document.querySelector("#actionForm"),
  actionDialogTitle: document.querySelector("#actionDialogTitle"),
  deleteActionButton: document.querySelector("#deleteActionButton"),
  opportunitySearch: document.querySelector("#opportunitySearch"),
  statusFilter: document.querySelector("#statusFilter"),
  typeFilter: document.querySelector("#typeFilter"),
  importInput: document.querySelector("#importInput"),
};

function loadState() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : structuredClone(seedData);
  } catch {
    return structuredClone(seedData);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  elements.lastSaved.textContent = `Saved ${new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  })}`;
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatDate(dateString) {
  if (!dateString) return "No date";
  return new Date(`${dateString}T12:00:00`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function dueState(dateString) {
  if (!dateString) return { label: "No deadline", overdue: false };
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const due = new Date(`${dateString}T00:00:00`);
  const days = Math.ceil((due - today) / 86400000);
  if (days < 0) return { label: `${Math.abs(days)}d overdue`, overdue: true };
  if (days === 0) return { label: "Due today", overdue: false };
  if (days === 1) return { label: "Due tomorrow", overdue: false };
  return { label: `Due ${formatDate(dateString)}`, overdue: false };
}

function openActionCount() {
  return state.actions.filter((action) => action.status !== "Completed").length;
}

function renderAll() {
  renderMetrics();
  renderPriorityList();
  renderStageChart();
  renderRecentOpportunities();
  renderOpportunities();
  renderActions();
  populateFilters();
  elements.navOpportunityCount.textContent = state.opportunities.length;
  elements.navActionCount.textContent = openActionCount();
  elements.heroActionCount.textContent = `${openActionCount()} ${
    openActionCount() === 1 ? "action" : "actions"
  }`;
}

function renderMetrics() {
  const active = state.opportunities.filter(
    (item) => !["Closed", "Waiting"].includes(item.status),
  ).length;
  const assessments = state.opportunities.filter(
    (item) => item.status === "Assessment",
  ).length;
  const waiting = state.opportunities.filter((item) =>
    ["Under review", "Waiting"].includes(item.status),
  ).length;
  const urgent = state.actions.filter(
    (action) => action.status !== "Completed" && action.priority === "High",
  ).length;

  const metrics = [
    ["Active opportunities", active, `${state.opportunities.length} total records`],
    ["Assessments", assessments, "Personal completion required"],
    ["Awaiting response", waiting, "Monitor and follow up"],
    ["High-priority actions", urgent, urgent ? "Needs attention" : "All clear"],
  ];

  elements.metricGrid.innerHTML = metrics
    .map(
      ([label, value, note]) => `
        <article class="metric-card">
          <span>${escapeHtml(label)}</span>
          <strong>${value}</strong>
          <small>${escapeHtml(note)}</small>
        </article>
      `,
    )
    .join("");
}

function sortedOpenActions() {
  const priorityRank = { High: 0, Medium: 1, Low: 2 };
  return state.actions
    .filter((action) => action.status !== "Completed")
    .sort((a, b) => {
      if (priorityRank[a.priority] !== priorityRank[b.priority]) {
        return priorityRank[a.priority] - priorityRank[b.priority];
      }
      if (!a.dueDate) return 1;
      if (!b.dueDate) return -1;
      return a.dueDate.localeCompare(b.dueDate);
    });
}

function renderPriorityList() {
  const actions = sortedOpenActions().slice(0, 5);
  if (!actions.length) {
    elements.priorityList.innerHTML =
      '<div class="empty-state">No outstanding actions.</div>';
    return;
  }

  elements.priorityList.innerHTML = actions
    .map((action) => {
      const opportunity = state.opportunities.find(
        (item) => item.id === action.opportunityId,
      );
      const due = dueState(action.dueDate);
      return `
        <article class="priority-item" data-action-id="${action.id}">
          <span class="priority-dot ${action.priority}"></span>
          <div>
            <strong>${escapeHtml(action.title)}</strong>
            <small>${escapeHtml(opportunity?.company || "General")} · ${escapeHtml(
              action.status,
            )}</small>
          </div>
          <span class="due-label ${due.overdue ? "overdue" : ""}">${escapeHtml(
            due.label,
          )}</span>
        </article>
      `;
    })
    .join("");
}

function renderStageChart() {
  const counts = OPPORTUNITY_STATUSES.map((status) => ({
    status,
    count: state.opportunities.filter((item) => item.status === status).length,
  })).filter((item) => item.count);
  const max = Math.max(...counts.map((item) => item.count), 1);

  elements.stageChart.innerHTML = counts.length
    ? counts
        .map(
          (item) => `
            <div class="stage-row">
              <div class="stage-label">
                <span>${escapeHtml(item.status)}</span>
                <strong>${item.count}</strong>
              </div>
              <div class="stage-track">
                <div class="stage-fill" style="width:${(item.count / max) * 100}%"></div>
              </div>
            </div>
          `,
        )
        .join("")
    : '<div class="empty-state">No pipeline data.</div>';
}

function renderRecentOpportunities() {
  const records = [...state.opportunities]
    .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))
    .slice(0, 5);

  elements.recentOpportunities.innerHTML = records.length
    ? `
      <table class="opportunity-table">
        <thead>
          <tr>
            <th>Opportunity</th>
            <th>Type</th>
            <th>Status</th>
            <th>Next review</th>
            <th>Potential</th>
          </tr>
        </thead>
        <tbody>
          ${records
            .map(
              (item) => `
                <tr>
                  <td>
                    <span class="record-name" data-opportunity-id="${item.id}">
                      ${escapeHtml(item.name)}
                    </span>
                    <small style="display:block;color:var(--muted)">${escapeHtml(
                      item.company,
                    )}</small>
                  </td>
                  <td><span class="type-chip">${escapeHtml(item.type)}</span></td>
                  <td><span class="status-chip">${escapeHtml(item.status)}</span></td>
                  <td>${formatDate(item.reviewDate)}</td>
                  <td>${escapeHtml(item.value || "Not set")}</td>
                </tr>
              `,
            )
            .join("")}
        </tbody>
      </table>
    `
    : '<div class="empty-state">Add your first opportunity.</div>';
}

function renderOpportunities() {
  const search = elements.opportunitySearch.value.toLowerCase();
  const status = elements.statusFilter.value;
  const type = elements.typeFilter.value;
  const records = state.opportunities.filter((item) => {
    const matchesSearch = [item.name, item.company, item.notes]
      .join(" ")
      .toLowerCase()
      .includes(search);
    const matchesStatus = status === "all" || item.status === status;
    const matchesType = type === "all" || item.type === type;
    return matchesSearch && matchesStatus && matchesType;
  });

  elements.opportunityGrid.innerHTML = records.length
    ? records
        .map(
          (item) => `
            <article class="opportunity-card" data-opportunity-id="${item.id}">
              <div class="card-top">
                <span class="type-chip">${escapeHtml(item.type)}</span>
                <span class="status-chip">${escapeHtml(item.status)}</span>
              </div>
              <h3>${escapeHtml(item.name)}</h3>
              <div class="company">${escapeHtml(item.company)}</div>
              <p class="notes">${escapeHtml(item.notes || "No notes added.")}</p>
              <div class="card-footer">
                <span>Review ${formatDate(item.reviewDate)}</span>
                <strong>${escapeHtml(item.value || "Value not set")}</strong>
              </div>
            </article>
          `,
        )
        .join("")
    : '<div class="empty-state">No opportunities match these filters.</div>';
}

function renderActions() {
  const columns = [
    { label: "Needs action", statuses: ["Outstanding", "In progress"] },
    { label: "Waiting", statuses: ["Waiting"] },
    { label: "Completed", statuses: ["Completed"] },
  ];

  elements.actionBoard.innerHTML = columns
    .map((column) => {
      const actions = state.actions.filter((action) =>
        column.statuses.includes(action.status),
      );
      return `
        <section class="action-column">
          <div class="action-column-header">
            <h3>${column.label}</h3>
            <span>${actions.length}</span>
          </div>
          ${
            actions.length
              ? actions
                  .map((action) => {
                    const opportunity = state.opportunities.find(
                      (item) => item.id === action.opportunityId,
                    );
                    const due = dueState(action.dueDate);
                    return `
                      <article class="action-card" data-action-id="${action.id}">
                        <strong>${escapeHtml(action.title)}</strong>
                        <small>${escapeHtml(opportunity?.name || "General action")}</small>
                        <div class="action-meta">
                          <span class="priority-dot ${action.priority}"></span>
                          <span class="due-label ${due.overdue ? "overdue" : ""}">
                            ${escapeHtml(due.label)}
                          </span>
                        </div>
                      </article>
                    `;
                  })
                  .join("")
              : '<div class="empty-state">Nothing here.</div>'
          }
        </section>
      `;
    })
    .join("");
}

function populateFilters() {
  const currentStatus = elements.statusFilter.value || "all";
  const currentType = elements.typeFilter.value || "all";
  elements.statusFilter.innerHTML =
    '<option value="all">All statuses</option>' +
    OPPORTUNITY_STATUSES.map(
      (item) => `<option value="${item}">${item}</option>`,
    ).join("");
  elements.typeFilter.innerHTML =
    '<option value="all">All types</option>' +
    OPPORTUNITY_TYPES.map(
      (item) => `<option value="${item}">${item}</option>`,
    ).join("");
  elements.statusFilter.value = currentStatus;
  elements.typeFilter.value = currentType;
}

function switchView(viewName) {
  Object.entries(elements.views).forEach(([name, view]) => {
    view.classList.toggle("active", name === viewName);
  });
  elements.navItems.forEach((item) => {
    item.classList.toggle("active", item.dataset.view === viewName);
  });
  elements.pageTitle.textContent =
    {
      dashboard: "Opportunity Overview",
      opportunities: "Opportunity Pipeline",
      actions: "Action Centre",
    }[viewName] || "Business House";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function populateSelect(select, values, selectedValue) {
  select.innerHTML = values
    .map(
      (value) =>
        `<option value="${escapeHtml(value)}" ${
          value === selectedValue ? "selected" : ""
        }>${escapeHtml(value)}</option>`,
    )
    .join("");
}

function openOpportunityDialog(id = "") {
  const item = state.opportunities.find((record) => record.id === id);
  const form = elements.opportunityForm;
  form.reset();
  form.elements.id.value = item?.id || "";
  form.elements.name.value = item?.name || "";
  form.elements.company.value = item?.company || "";
  populateSelect(form.elements.type, OPPORTUNITY_TYPES, item?.type);
  populateSelect(form.elements.status, OPPORTUNITY_STATUSES, item?.status);
  form.elements.value.value = item?.value || "";
  form.elements.reviewDate.value = item?.reviewDate || "";
  form.elements.url.value = item?.url || "";
  form.elements.notes.value = item?.notes || "";
  elements.opportunityDialogTitle.textContent = item
    ? "Edit opportunity"
    : "Add opportunity";
  elements.deleteOpportunityButton.classList.toggle("hidden", !item);
  elements.opportunityDialog.showModal();
}

function openActionDialog(id = "") {
  const item = state.actions.find((record) => record.id === id);
  const form = elements.actionForm;
  form.reset();
  form.elements.id.value = item?.id || "";
  form.elements.title.value = item?.title || "";
  form.elements.opportunityId.innerHTML =
    '<option value="">General / no opportunity</option>' +
    state.opportunities
      .map(
        (opportunity) =>
          `<option value="${opportunity.id}">${escapeHtml(
            opportunity.name,
          )}</option>`,
      )
      .join("");
  form.elements.opportunityId.value = item?.opportunityId || "";
  form.elements.priority.value = item?.priority || "Medium";
  form.elements.dueDate.value = item?.dueDate || "";
  form.elements.status.value = item?.status || "Outstanding";
  form.elements.notes.value = item?.notes || "";
  elements.actionDialogTitle.textContent = item ? "Edit action" : "Add action";
  elements.deleteActionButton.classList.toggle("hidden", !item);
  elements.actionDialog.showModal();
}

elements.navItems.forEach((item) =>
  item.addEventListener("click", () => switchView(item.dataset.view)),
);

document.querySelectorAll("[data-switch-view]").forEach((button) =>
  button.addEventListener("click", () =>
    switchView(button.dataset.switchView),
  ),
);

document
  .querySelector("#addOpportunityButton")
  .addEventListener("click", () => openOpportunityDialog());
document
  .querySelector("#addActionButton")
  .addEventListener("click", () => openActionDialog());

document.addEventListener("click", (event) => {
  const opportunityTarget = event.target.closest("[data-opportunity-id]");
  const actionTarget = event.target.closest("[data-action-id]");
  if (opportunityTarget) {
    openOpportunityDialog(opportunityTarget.dataset.opportunityId);
  }
  if (actionTarget) {
    openActionDialog(actionTarget.dataset.actionId);
  }
  if (event.target.closest(".close-dialog")) {
    event.target.closest("dialog").close();
  }
});

elements.opportunityForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.currentTarget));
  const now = new Date().toISOString();
  if (data.id) {
    const index = state.opportunities.findIndex((item) => item.id === data.id);
    state.opportunities[index] = {
      ...state.opportunities[index],
      ...data,
      updatedAt: now,
    };
  } else {
    state.opportunities.push({
      ...data,
      id: crypto.randomUUID(),
      createdAt: now,
      updatedAt: now,
    });
  }
  saveState();
  elements.opportunityDialog.close();
  renderAll();
});

elements.actionForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.currentTarget));
  if (data.id) {
    const index = state.actions.findIndex((item) => item.id === data.id);
    state.actions[index] = { ...state.actions[index], ...data };
  } else {
    state.actions.push({
      ...data,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    });
  }
  saveState();
  elements.actionDialog.close();
  renderAll();
});

elements.deleteOpportunityButton.addEventListener("click", () => {
  const id = elements.opportunityForm.elements.id.value;
  state.opportunities = state.opportunities.filter((item) => item.id !== id);
  state.actions = state.actions.filter((item) => item.opportunityId !== id);
  saveState();
  elements.opportunityDialog.close();
  renderAll();
});

elements.deleteActionButton.addEventListener("click", () => {
  const id = elements.actionForm.elements.id.value;
  state.actions = state.actions.filter((item) => item.id !== id);
  saveState();
  elements.actionDialog.close();
  renderAll();
});

[
  elements.opportunitySearch,
  elements.statusFilter,
  elements.typeFilter,
].forEach((field) => field.addEventListener("input", renderOpportunities));

document.querySelector("#exportButton").addEventListener("click", () => {
  const blob = new Blob([JSON.stringify(state, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `finaccord-business-house-${new Date()
    .toISOString()
    .slice(0, 10)}.json`;
  link.click();
  URL.revokeObjectURL(url);
});

elements.importInput.addEventListener("change", async (event) => {
  const file = event.target.files[0];
  if (!file) return;
  try {
    const imported = JSON.parse(await file.text());
    if (!Array.isArray(imported.opportunities) || !Array.isArray(imported.actions)) {
      throw new Error("Invalid dashboard backup");
    }
    state = imported;
    saveState();
    renderAll();
  } catch {
    alert("This file is not a valid Business House dashboard backup.");
  } finally {
    event.target.value = "";
  }
});

elements.todayLabel.textContent = new Date().toLocaleDateString("en-GB", {
  weekday: "long",
  day: "numeric",
  month: "long",
});

renderAll();
