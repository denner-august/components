import { useState, useEffect } from "react";
import { api } from "../services/api";
import { Button } from "./Button";

interface paramsProps {
  selectedGenreId: number;
  setSelectedGenreId: (selectedGenreId: number) => void;
  genres: GenreResponseProps[];
}

interface GenreResponseProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}
export function SideBar({
  selectedGenreId,
  setSelectedGenreId,
  genres,
}: paramsProps): JSX.Element {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre: GenreResponseProps) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => setSelectedGenreId(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
