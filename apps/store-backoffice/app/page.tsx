"use client";

import { make as Home } from "@repo/ui-kit/components/pages/index.bs";
import { Calendar } from "@repo/ui-kit/components/ui/calendar";

export default function Page() {
  return (
    <main>
      <Home></Home>
      <Calendar />
    </main>
  );
}
