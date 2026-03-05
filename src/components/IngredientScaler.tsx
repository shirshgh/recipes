"use client";

import { useState } from "react";
import * as Slider from "@radix-ui/react-slider";
import { Users } from "lucide-react";
import { scaleAmount } from "@/lib/utils";
import type { Ingredient } from "@/db/schema";

interface Props {
  baseServings: number;
  ingredients: Ingredient[];
}

export function IngredientScaler({ baseServings, ingredients }: Props) {
  const [servings, setServings] = useState(baseServings);
  const scale = servings / baseServings;

  return (
    <div className="space-y-5">
      {/* Slider */}
      <div className="bg-brand-50 rounded-2xl p-5 space-y-4 border border-brand-100">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-sm font-serif font-semibold text-gray-700">
            <Users size={15} />
            Servings
          </span>
          <span className="text-brand-600 font-bold text-xl font-serif">{servings}</span>
        </div>

        <Slider.Root
          min={1}
          max={Math.max(baseServings * 4, 20)}
          step={1}
          value={[servings]}
          onValueChange={([v]) => setServings(v)}
          className="relative flex items-center select-none touch-none w-full h-5"
        >
          <Slider.Track className="bg-brand-200 relative grow rounded-full h-2">
            <Slider.Range className="absolute bg-brand-600 rounded-full h-full" />
          </Slider.Track>
          <Slider.Thumb
            className="block w-5 h-5 bg-white border-2 border-brand-600 rounded-full shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-brand-400 cursor-grab active:cursor-grabbing"
            aria-label="Servings"
          />
        </Slider.Root>

        <div className="flex justify-between text-xs text-gray-400 font-serif">
          <span>1</span>
          <span>Base: {baseServings}</span>
          <span>{Math.max(baseServings * 4, 20)}</span>
        </div>

        {scale !== 1 && (
          <p className="text-xs text-brand-600 font-serif font-semibold">
            Scaled ×{Math.round(scale * 100) / 100} from base recipe
          </p>
        )}
      </div>

      {/* Ingredient list */}
      <ul className="space-y-2.5">
        {ingredients.map((ing) => {
          if (Number(ing.amount) === 0) {
            return (
              <li key={ing.id} className="pt-2 pb-0.5">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-500 font-serif">
                  {ing.name}
                </span>
              </li>
            );
          }
          return (
            <li key={ing.id} className="flex items-start gap-3 text-sm font-serif">
              <span className="font-bold text-brand-600 w-20 shrink-0 text-right leading-snug">
                {scaleAmount(ing.amount, scale)} {ing.unit}
              </span>
              <span className="text-gray-700 leading-snug">
                {ing.name}
                {ing.notes && (
                  <span className="text-gray-400 italic ml-1">({ing.notes})</span>
                )}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
