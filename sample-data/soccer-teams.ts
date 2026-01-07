export interface SoccerTeam {
    name: string;
    wins: number;
    losses: number;
    goalsScored: number;
    cleanSheets: number;
    formation: string;
}

export const teams: SoccerTeam[] = [
    { name: 'FC Barcelona', wins: 18, losses: 4, goalsScored: 67, cleanSheets: 12, formation: '4-3-3' },
    { name: 'Real Madrid', wins: 17, losses: 5, goalsScored: 64, cleanSheets: 11, formation: '4-3-3' },
    { name: 'Manchester United', wins: 15, losses: 7, goalsScored: 52, cleanSheets: 9, formation: '4-2-3-1' },
    { name: 'Bayern Munich', wins: 19, losses: 3, goalsScored: 71, cleanSheets: 14, formation: '4-2-3-1' },
    { name: 'Liverpool FC', wins: 16, losses: 6, goalsScored: 58, cleanSheets: 10, formation: '4-3-3' },
];