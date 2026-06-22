export interface CharactersResponse {
 info:    Info;
 results: Character[];
}

export interface Info {
 count: number;
 next:  string;
 pages: number;
 prev:  null;
}

export interface Character {
 created:  string;
 episode:  string[];
 gender:   Gender;
 id:       number;
 image:    string;
 location: Location;
 name:     string;
 origin:   Location;
 species:  Species;
 status:   Status;
 type:     string;
 url:      string;
}

type Gender = "Female" | "Male" | "unknown";

interface Location {
 name: string;
 url:  string;
}

type Species = "Alien" | "Human";

type Status = "Alive" | "Dead" | "unknown";
