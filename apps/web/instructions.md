# UI Instructions – FocusTube

## 1. Design Philosophy
- Minimal
- Calm
- Distraction-free
- No flashy animations
- No gradients unless explicitly approved
- Focus > aesthetics

## 2. Atomic Design Rules
- Atoms MUST NOT import from molecules or above
- Molecules can only use atoms
- Organisms can use atoms + molecules
- Pages MUST NOT contain reusable UI logic
- Pages only compose templates + organisms

## 3. Styling Rules
- No inline styles
- **Use Material UI (MUI) components for Atoms**
- **Style using MUI's `sx` prop or `styled` utility**
- No random colors
- Use theme tokens only
- One font family across the app

## 4. Naming Conventions
- Folder: PascalCase
- Component: PascalCase
- File: ComponentName.tsx
- Styles: ComponentName.styles.ts

## 5. Accessibility (Mandatory)
- Buttons must have aria-labels
- Text contrast must be readable
- Click targets >= 44px

## 6. Responsiveness
- Mobile-first design
- Tablet friendly
- Desktop clean and centered
- Max content width: 1200px

## 7. What NOT to Do
- No copy-paste UI
- No duplicate components
- No hardcoded colors
- No logic inside atoms

## 8. Before Creating a New Component
Ask:
1. Can this be reused?
2. Does it already exist?
3. Is this the right atomic level?

If unsure → ask the team.

## Theming Rules
- All colors must come from theme/colors.ts
- All font sizes must come from theme/typography.ts
- All spacing must come from theme/spacing.ts
- No hardcoded hex values
- No custom font sizes

If a value is missing → update the theme, not the component.

app/
 └── ui/
     ├── atoms/
     │    ├── Button/
     │    │    ├── Button.tsx
     │    │    └── Button.test.tsx
     │    ├── Text/
     │    ├── Icon/
     │    ├── Input/
     │    └── Loader/
     │
     ├── molecules/
     │    ├── SearchBar/
     │    ├── VideoCard/
     │    ├── Header/
     │    └── EmptyState/
     │
     ├── organisms/
     │    ├── NavigationBar/
     │    ├── VideoFeed/
     │    ├── PreferencesPanel/
     │    └── Footer/
     │
     ├── templates/
     │    ├── MainLayout/
     │    ├── AuthLayout/
     │    └── SettingsLayout/
     │
     ├── pages/
     │    ├── Home/page.tsx
     │    ├── Preferences/page.tsx
     │    ├── History/page.tsx
     │    └── Settings/page.tsx
     │
     ├── theme/
     │    ├── colors.ts
     │    ├── typography.ts
     │    ├── spacing.ts
     │    └── index.ts
     │
     ├── icons/
     │    └── index.ts
     │
     ├── hooks/
     │    └── useTheme.ts
     │
     └── index.ts

Can you help me implement a custom 404 Not Found page using the MainLayout?
How do I update the handleGoogleLogin function to also save the user state?