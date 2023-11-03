import { useState, useEffect } from 'react';
import * as apis from './api';

type Props = {
    url: string;
}

type Character = {
    name: string, 
    birth_year: string,
    gender: string,
    created: string,
}

const Character = ({ url }: Props) => {
    const [character, setCharacter] = useState<Character | null>(null);

    useEffect(() => {
        apis.fetchCharacters(url).then(data => setCharacter(data));
    }, [])

    return character && (
        <li className='character-card'>{character.name}</li>
    )
};

export default Character;