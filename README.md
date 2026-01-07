# Soccer App
This is a very dumb stupid demo, used for explaining [geet](https://github.com/modularizer/geet)


# Sports demo

### 1. Setup your "App"
1. Clone soccer repo and setup initial state
```bash
git clone https://modularizer/geet-soccer-app.git soccer
cd soccer
git checkout origin/initial
```

2. Try out soccer app (it is SUPER basic)
```bash
cp example.env .env
npm install
npm start
```

**NOTE:** So far, `soccer` has absolutely no clue we plan to use `geet` to build a template from it. Think of `soccer` as ANY git project you may have.

### 2. Setup your "Template"
1. Make a template git repo
```bash
geet template sport "a sport template built from the geet-soccer-app"
```

### 3. Start telling `soccer` about `sport`
The cat is out of the bag! We are planning to build a template from `soccer`.

Here is the thing...
- it is **not mandatory** for you to commit `.sport` or any template-specific files to your repo
- but I don't see much reason **not** to do so, and there are many benefits
- you **must** ensure tyour app repo (`soccer`) does not accidentally commit `.sport/dot-git` folder

1. Ignore "soccer" in `.sport/semitracked-config.env` to avoid committing anything soccer-specific to the template repo
```bash
sed -i 's/PREVENT_COMMIT_FILE_PATTERNS_2=""/PREVENT_COMMIT_FILE_PATTERNS_2="soccer"/g' .sport/semitracked-template-config.env
sed -i 's/PREVENT_COMMIT_CONTENT_PATTERNS_2=""/PREVENT_COMMIT_CONTENT_PATTERNS_2="soccer"/g' .sport/semitracked-template-config.env
```

2. Commit the new template (.sport) to "soccer" repo

### 4. Start building the template
1. Use `geet include` to add any fully generic files to the template repo (it should )
```bash
geet include app/index.tsx
geet include app/stats.tsx
geet include components/StatItem.tsx
geet include theme/colors.ts
geet include consts.ts
geet include tsconfig.json
geet include quickstart.sh
geet include app/_layout.tsx -f # this demos how to force add a file
```

2. "Accidentally" include a file containing one of our patterns ("soccer") to see it barf
```bash
geet include app/teams.tsx
#>>> ❌ [geet include] Found patterns that may indicate app-specific code:
#>>> 
#>>>   CONTENT: app/teams.tsx matches pattern: soccer
#>>>   → 3:import SoccerTeamCard from '../components/SoccerTeamCard';
#>>>   CONTENT: app/teams.tsx matches pattern: soccer
#>>>   → 18:              <SoccerTeamCard
#>>> 
#>>> These patterns suggest implementation-specific code that shouldn't be in the template.
#>>> 
#>>> To fix: Remove the matched patterns or update template-config.env, semitracked-template-config.env, or untracked-template-config.env
```

3. Make a generic `SportTeamCard.tsx` from `SoccerTeamCard.tsx` for your template to use
```bash
cp components/SoccerTeamCard.tsx components/SportTeamCard.tsx
sed -i 's/Soccer/Sport/g' components/SportTeamCard.tsx
sed -i 's/soccer/sport/g' components/SportTeamCard.tsx

geet include components/SportTeamCard.tsx --discreet  # adding as --discreet will keep it untracked by `soccer` by adding to soccer's .git/info/exclude

```

4. Make a `app/teams.template.tsx` from `app/teams.tsx` for your template to use
   This is **special**...
- `app/teams.template.tsx` will enter the `sport` repo as `app/teams.tsx` but show up in your `soccer/` working directory as `app/teams.template.tsx`
- `app/teams.template.tsx` will be ignored by the soccer repo

```bash
cp app/teams.tsx app/teams.template.tsx
sed -i 's/Soccer/Sport/g' app/teams.template.tsx
sed -i 's/soccer/sport/g' app/teams.template.tsx

geet include app/teams.template.tsx
```

5. Do the same for `app/sample-data`
```bash
cp sample-data/index.ts sample-data/index.template.ts
sed -i 's/Soccer/Sport/g; s/soccer/sport/g;' sample-data/index.template.ts
geet include sample-data/index.template.ts

echo -e 'export const stats = [{ label: "Total Goals", value: 0 },];\n' >> sample-data/sport-stats.ts
geet include sample-data/sport-stats.ts --discreet

cat <<'EOF' > sample-data/sport-teams.ts
export interface SportTeam {
    name: string;
    wins: number;
    losses: number;
    goalsScored: number;
    cleanSheets: number;
    formation: string;
}

export const teams: SportTeam[] = [
  { name: 'Hornets', wins: 3, losses: 2, goalsScored: 5, cleanSheets: 1, formation: '4-3-3' },
];
EOF
geet include sample-data/sport-teams.ts --discreet
```

6. Add a new favicon as favicon.template.svg
```bash
cat <<'EOF' > favicon.template.svg
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- circle -->
  <circle cx="16" cy="16" r="15" fill="white" stroke="#333" stroke-width="1"/>
</svg>
EOF

geet include favicon.template.svg
```

7. Setup app.json, package.json, package-lock.json
```bash
sed 's/Soccer/Sport/g; s/soccer/sport/g' app.json > app.template.json
geet include app.template.json
sed 's/Soccer/Sport/g; s/soccer/sport/g' package.json > package.template.json
geet include package.template.json
sed 's/Soccer/Sport/g; s/soccer/sport/g' package-lock.json > package-lock.template.json
geet include package-lock.template.json
```

8. Setup `example.env`
```bash
cat <<'EOF' > example.template.env
EXPO_PUBLIC_APP_NAME="Sport App"
EXPO_PUBLIC_SPORT_NAME=sport
EXPO_PUBLIC_SPORT_EMOJI=🏆
EOF

geet include example.template.env
```

9. Commit!
```bash
geet commit -m "add sport template"
#checking if we need to auto-promote the template's readme...
#readme_path not in diff
#checking if we need to auto-promote the template's parent gitignore...
#checking if we accidentally commited any protected files...
#checking for more precommit hooks...
#checking for user-define hooks in /home/mod/Code/geet/demos/soccer/.sport/pre-commit...
#made it through precommit!
#[master 3ab4a38] add sport template
# 17 files changed, 12042 insertions(+), 1 deletion(-)
# create mode 100644 app.json
# create mode 100644 app/_layout.tsx
# create mode 100644 app/index.tsx
# create mode 100644 app/stats.tsx
# create mode 100644 components/SportTeamCard.tsx
# create mode 100644 components/StatItem.tsx
# create mode 100644 consts.ts
# create mode 100644 example.env
# create mode 100644 favicon.svg
# create mode 100644 package-lock.json
# create mode 100644 package.json
# create mode 100644 sample-data/sport-stats.ts
# create mode 100644 sample-data/sport-teams.ts
# create mode 100644 theme/colors.ts
# create mode 100644 tsconfig.json
```

10. extra debug commands (optional)
```bash
geet status
geet tree
geet ls-files
geet inspect app
```


### 5. Commit the template changes to your app repo (optional)
```bash
git commit -m "building a template"
```