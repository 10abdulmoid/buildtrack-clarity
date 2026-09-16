# Add Polished Motion to BuildTrack

## Goal
Add restrained, premium animation that makes the landing page feel more dynamic while preserving its practical construction-tech character, accessibility, and performance.

## Planned changes

1. **Staged opening sequence**
   - Reveal the hero label, headline, supporting copy, actions, and trust points in a short staggered sequence.
   - Bring the project progress panel in with a subtle upward slide and settle.
   - Add a very slow, minimal scale movement to the construction photograph for depth without distracting from the message.

2. **Scroll-triggered section reveals**
   - Introduce a lightweight intersection-observer reveal wrapper using native browser APIs.
   - Animate headings, supporting text, stakeholder panels, workflow steps, feature items, photos, FAQ, and final action only when they enter the viewport.
   - Stagger repeated items such as stakeholder panels, workflow stages, and feature rows.

3. **Product preview motion**
   - Animate progress bars from zero to their displayed values when visible.
   - Add a brief fade-and-slide transition when switching between Progress, Buyer portal, Requests, and Documents.
   - Keep the preview dimensions stable so transitions never shift the layout.

4. **Interaction polish**
   - Add restrained lift or directional movement to action buttons, icons, feature items, and image panels.
   - Animate the mobile navigation opening and closing rather than making it appear instantly.
   - Preserve existing keyboard focus treatments and semantic controls.

5. **Accessibility and validation**
   - Fully honor reduced-motion preferences by disabling decorative movement and revealing content immediately.
   - Verify desktop and mobile views, tab switching, mobile navigation, and browser console output.

## Technical details
- Use CSS keyframes, transitions, and one small reusable React visibility helper; no animation dependency is required.
- Keep transforms opacity-based for smooth rendering and avoid layout-changing animation.
- Apply motion classes through the existing design system stylesheet so timing and easing remain consistent across the page.