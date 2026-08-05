create extension if not exists pgcrypto;

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  nome text not null,
  whatsapp text not null,
  email text not null,
  created_at timestamptz not null default now()
);

alter table public.leads enable row level security;

drop policy if exists "publico pode cadastrar leads" on public.leads;
create policy "publico pode cadastrar leads"
on public.leads
for insert
to anon, authenticated
with check (true);
