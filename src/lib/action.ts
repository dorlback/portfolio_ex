"use server";

import { createClient } from "@/lib/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import supabase from "./supabaseClient";
import { NextResponse } from "next/server";

export async function login(email, password) {
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: email,
    password: password,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/admin");
}

// export async function logout() {
//   await supabase.auth.signOut();
//   redirect("/admin-login");
// }

export async function logout() {
  const supabase = await createClient();
  await supabase.auth.signOut();

  // 로그아웃 후 캐시를 무효화하고 로그인 페이지 등으로 리다이렉션합니다.
  revalidatePath("/", "layout");
  redirect("/admin-login");
}
