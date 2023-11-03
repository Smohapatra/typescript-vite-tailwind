export const fetchMovieData = async () => {
    const req = await fetch('https://swapi.dev/api/films/2/');
    const res = req.json();
    return res;
}

export const fetchCharacters = async (characterUrl : string) => {
    const req = await fetch(characterUrl);
    const res = await req.json();
    return res;
}