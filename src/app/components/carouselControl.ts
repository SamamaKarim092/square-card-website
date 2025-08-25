"use client";

import type { CarouselApi } from "./ui/carousel";

let currentCarouselApi: CarouselApi | null = null;

export function setCarouselApi(api: CarouselApi) {
  currentCarouselApi = api;
}

export function scrollCarouselPrev() {
  currentCarouselApi?.scrollPrev();
}

export function scrollCarouselNext() {
  currentCarouselApi?.scrollNext();
}


