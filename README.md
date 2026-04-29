# Meenu M Pillai — Portfolio (GitHub Edition)
## Image Replacement Guide

This file is production-ready for GitHub Pages. Deploy `index.html` directly.

---

## How to Replace Images

Every image slot in the portfolio is marked with HTML comments:

```html
<!-- IMG_SLOT:SLOT_CODE -->
... placeholder div ...
<!-- /IMG_SLOT:SLOT_CODE -->
```

**To replace a slot:**
1. Open `index.html` in any code editor
2. Search for `<!-- IMG_SLOT:SLOT_CODE -->` (e.g. `<!-- IMG_SLOT:DP_SCR01 -->`)
3. Replace the entire block from `<!-- IMG_SLOT:... -->` to `<!-- /IMG_SLOT:... -->` with:

```html
<img src="images/YOUR_IMAGE.jpg" alt="Description" style="width:100%;height:auto;display:block;border-radius:8px;">
```

Or embed as base64:
```html
<img src="data:image/jpeg;base64,/9j/4AAQ..." alt="Description" style="width:100%;height:auto;display:block;border-radius:8px;">
```

---

## Complete Slot Reference

### Work Card Thumbnails (Homepage)
These images are embedded as base64 — to replace, find the `src="data:image/jpeg;base64,..."`  
inside each `id="card-img-XX"` element.

| ID | Description |
|---|---|
| `card-img-mc` | Merchant Services card cover |
| `card-img-mm` | Financial Goals card cover |
| `card-img-ze` | Zeuron Health AI card cover |
| `card-img-dp` | Dr. Physio card cover |
| `card-img-mo` | MiMo Console card cover |
| `hero-img` | Fargo hero banner image |

---

### Case Study Image Slots (inside project pages)

#### MiMo Console
| Code | Description |
|---|---|
| `MIMO_HERO` | Hero / Platform Overview Screenshot |
| `MIMO_PROBLEM` | Problem Diagram / Research Overview |
| `MIMO_RESEARCH` | Workshop or Interview Photos |

#### Dr. Physio
| Code | Description |
|---|---|
| `DP_PT1` | Head Therapist Portrait / Session Photo |
| `DP_PT2` | Specialist Therapist Portrait / Session Photo |
| `DP_PT3` | Patient Portrait / Rehabilitation Photo |
| `DP_PROCESS` | Game Design Process / Methodology Artefacts |
| `DP_SCR01` | Dashboard Analytics UI |
| `DP_SCR02` | Patient Onboarding Form 1 |
| `DP_SCR03` | Patient Onboarding Form 2 |
| `DP_SCR04` | Patient Profile Screen |
| `DP_SCR05` | Game Selection Screen |
| `DP_SCR06` | Multiplayer / Single Player Mode |
| `DP_DATAVIZ01` | Data Visualisation — Graph Type 01 |
| `DP_DATAVIZ02` | Data Visualisation — Graph Type 02 |
| `DP_DATAVIZ03` | Data Visualisation — Graph Type 03 |
| `DP_REPORT` | Full Patient Report Screen |
| `DP_DOCTOR` | Doctor Dashboard / Treatment Programme |
| `DP_TRACKING` | Patient Tracking / Progress View |
| `DP_ASSESS` | Patient Assessment / Onboarding |
| `DP_TREATMENT` | Treatment Plan Screen |
| `DP_EXERCISE` | Exercise / Training Screen |
| `DP_SCHEDULE` | Schedule / Appointment Calendar |

#### Merchant Session Platform
| Code | Description |
|---|---|
| `ME_DS_IMG` | Design Solution — Wireframe or Mid-Fidelity |
| `ME_IT_IMG` | Iteration Artefact — L4 Review or High-Fidelity |

---

## GitHub Pages Deployment

1. Create a new repo (e.g. `meenu-portfolio`)
2. Upload `index.html` to the root
3. Go to **Settings → Pages → Source → main branch → / (root)**
4. Your portfolio will be live at `https://yourusername.github.io/meenu-portfolio/`

---
*Portfolio for Meenu M Pillai — Generated for GitHub deployment*
