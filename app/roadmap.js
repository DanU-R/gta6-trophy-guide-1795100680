// The "Road to the Platinum": a concise, ordered plan that groups the 54 base trophies
// into logical phases. Each phase lists which trophy ids belong to it, and the UI marks
// them as done as the player ticks them off.

export const PHASES = [
  {
    key: 'story',
    name: 'Phase 1 — Main Story',
    tag: 'Story',
    tagClass: '',
    desc: 'Push the campaign to the credits. Story bronzes and the final-mission gold come naturally — don’t detour yet.',
    ids: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 48],
  },
  {
    key: 'side',
    name: 'Phase 2 — Side Content & Strangers',
    tag: 'Side',
    tagClass: 'phase-tag--side',
    desc: 'After the story opens the map, run the contact chains (Andy, Kenton, Billy, Randy, Tyrone) and stranger strands, plus drone races, shooting range and the activity sampler.',
    ids: [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 29, 32, 44, 46],
  },
  {
    key: 'collect',
    name: 'Phase 3 — Collectibles & Exploration',
    tag: 'Collectibles',
    tagClass: 'phase-tag--coll',
    desc: 'Sweep the map for collectibles: meditation spots, card sets, WAiNK check-ins, vehicle discovery, map fog and the hidden oddities.',
    ids: [28, 30, 31, 35, 42, 50],
  },
  {
    key: 'cleanup',
    name: 'Phase 4 — Cleanup & Remaining Misc',
    tag: 'Cleanup',
    tagClass: 'phase-tag--clean',
    desc: 'Mop up the remaining misc trophies — robberies, stunts, purchases, wanted-level and combat feats — then chase 100% completion for the final gold and platinum.',
    ids: [14, 15, 33, 34, 36, 37, 38, 39, 40, 41, 43, 45, 47, 49, 51, 52, 53, 54, 55],
  },
];

// Total base trophies the phases cover (every id except the platinum itself, id 1).
export const ROADMAP_IDS = PHASES.flatMap((p) => p.ids);
export const BASE_COUNT = ROADMAP_IDS.length;