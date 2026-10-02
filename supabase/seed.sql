insert into public.conversations (
  id,
  platform,
  platform_user_id,
  username,
  last_message,
  last_message_at,
  status,
  unread_count
) values
(
  '11111111-1111-4111-8111-111111111111',
  'instagram',
  '@ali.khan',
  'Ali Khan',
  '25kg AMT 1121 Steam Rice ka rate share kar dein.',
  '2026-10-02T15:42:00+05:00',
  'active',
  2
),
(
  '22222222-2222-4222-8222-222222222222',
  'facebook',
  'fb_hamza_store',
  'Hamza General Store',
  'Thank you, delivery mil gayi hai.',
  '2026-10-02T14:18:00+05:00',
  'resolved',
  0
),
(
  '33333333-3333-4333-8333-333333333333',
  'instagram',
  '@sarafoods',
  'Sara Foods',
  'Do you deliver wholesale orders to Lahore?',
  '2026-10-02T12:05:00+05:00',
  'active',
  1
)
on conflict (id) do nothing;

insert into public.messages (
  conversation_id,
  sender_type,
  message,
  created_at
) values
(
  '11111111-1111-4111-8111-111111111111',
  'user',
  'Assalam-o-Alaikum, mujhe AMT rice products ke bare mein information chahiye.',
  '2026-10-02T15:31:00+05:00'
),
(
  '11111111-1111-4111-8111-111111111111',
  'bot',
  'Wa Alaikum Assalam! A Mustafa Traders mein khush aamdeed.',
  '2026-10-02T15:32:00+05:00'
),
(
  '11111111-1111-4111-8111-111111111111',
  'user',
  '25kg AMT 1121 Steam Rice ka rate share kar dein.',
  '2026-10-02T15:42:00+05:00'
),
(
  '22222222-2222-4222-8222-222222222222',
  'user',
  'Order #AMT-2048 ka delivery update chahiye.',
  '2026-10-02T13:56:00+05:00'
),
(
  '22222222-2222-4222-8222-222222222222',
  'bot',
  'Aapka order aaj subah dispatch ho gaya tha.',
  '2026-10-02T14:02:00+05:00'
),
(
  '22222222-2222-4222-8222-222222222222',
  'user',
  'Thank you, delivery mil gayi hai.',
  '2026-10-02T14:18:00+05:00'
),
(
  '33333333-3333-4333-8333-333333333333',
  'user',
  'Do you deliver wholesale orders to Lahore?',
  '2026-10-02T12:05:00+05:00'
);
