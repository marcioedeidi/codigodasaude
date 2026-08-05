create extension if not exists pgcrypto;

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  nome text not null,
  whatsapp text not null,
  email text,
  objetivo text,
  ritmo text,
  dificuldade text,
  rotina text,
  consentimento boolean not null default false,
  recomendacao text,
  origem text not null default 'site',
  created_at timestamptz not null default now()
);

create index if not exists leads_whatsapp_idx on public.leads (whatsapp);
create index if not exists leads_created_at_idx on public.leads (created_at desc);

alter table public.leads enable row level security;

drop policy if exists "publico pode cadastrar leads" on public.leads;
create policy "publico pode cadastrar leads"
on public.leads
for insert
to anon, authenticated
with check (true);

-- Não criamos policy de SELECT, UPDATE ou DELETE para anon.
-- Assim o navegador pode cadastrar leads, mas não pode listar nem alterar os dados.
