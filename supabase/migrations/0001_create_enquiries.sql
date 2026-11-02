-- Create enquiries table for admission enquiries.
create table if not exists public.enquiries (
  id uuid primary key default gen_random_uuid(),
  parent_name text not null,
  phone text not null,
  student_class text,
  course text not null,
  message text,
  created_at timestamptz not null default now(),
  constraint enquiries_parent_name_length check (char_length(parent_name) between 1 and 100),
  constraint enquiries_phone_length check (char_length(phone) = 10),
  constraint enquiries_course_length check (char_length(course) between 1 and 100),
  constraint enquiries_student_class_length check (student_class is null or char_length(student_class) <= 50),
  constraint enquiries_message_length check (message is null or char_length(message) <= 500)
);

-- Enable Row Level Security.
alter table public.enquiries enable row level security;

-- Anonymous users may insert enquiries only.
create policy "anon can insert enquiries"
  on public.enquiries
  for insert
  to anon
  with check (true);

-- No public read/update/delete access.
-- (No policies for select/update/delete means denied by default.)