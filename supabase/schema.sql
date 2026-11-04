-- Database Schema & Security Policies
-- Brilliant Hub - Admission Enquiries Schema

-- 1. Create enquiries table for admission enquiries.
create table if not exists public.enquiries (
  id uuid primary key default gen_random_uuid(),
  parent_name text not null,
  phone text not null,
  student_class text,
  course text not null,
  message text,
  created_at timestamptz not null default now(),

  -- Constraints to validate and constrain incoming data
  constraint enquiries_parent_name_length check (char_length(trim(parent_name)) between 1 and 100),
  constraint enquiries_phone_format check (phone ~ '^[0-9]{10}$'),
  constraint enquiries_course_length check (char_length(trim(course)) between 1 and 100),
  constraint enquiries_student_class_length check (student_class is null or char_length(student_class) <= 50),
  constraint enquiries_message_length check (message is null or char_length(message) <= 500)
);

-- 2. Indexes for efficient lookup and sorting
create index if not exists enquiries_created_at_idx on public.enquiries (created_at desc);
create index if not exists enquiries_phone_idx on public.enquiries (phone);
create index if not exists enquiries_course_idx on public.enquiries (course);

-- 3. Enable Row Level Security (RLS)
alter table public.enquiries enable row level security;

-- 4. Row Level Security Policies:
-- Anonymous users may INSERT valid enquiries.
drop policy if exists "Allow anonymous inserts" on public.enquiries;
drop policy if exists "anon can insert enquiries" on public.enquiries;

create policy "Allow anonymous inserts"
  on public.enquiries
  for insert
  to anon
  with check (
    char_length(trim(parent_name)) between 1 and 100
    and phone ~ '^[0-9]{10}$'
    and char_length(trim(course)) between 1 and 100
  );

-- Anonymous users cannot SELECT, UPDATE, or DELETE enquiries.
-- Row Level Security defaults to denying any operation without an explicit policy.

