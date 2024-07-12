-- Please add any qyeries you are doing in the supabase sql editor on here.


-- CREATE tables

CREATE TABLE IF NOT EXISTS categories (
  id SERIAL PRIMARY KEY,
  cat_name TEXT
);

CREATE TABLE IF NOT EXISTS ui_posts (
  id SERIAL PRIMARY KEY,
  title TEXT,
  content TEXT,
  image TEXT,
  source TEXT,
  cat_id BIGINT,
  FOREIGN KEY ("cat_id") REFERENCES categories ("id")
);

CREATE TABLE IF NOT EXISTS comments (
  id SERIAL PRIMARY KEY,
  username TEXT,
  comment TEXT,
  post_id BIGINT,
  FOREIGN KEY ("post_id") REFERENCES ui_posts ("id")
)

-- INSERT into categories

INSERT INTO
  categories (cat_name)
VALUES
  ('Accommodation and Food Service Activities'),
  ('Construction'),
  ('Agriculture, Forestry and Fishing'),
  ('Other Service Activities'),
  ('Transportation and Storage'),
  (
    'Water Supply; Sewerage, Waste Management and Remediation Activities'
  ),
  ('Administrative and Support Service Activities'),
  ('Financial and Insurance Activities'),
  ('Arts, Entertainment and Recreation'),
  (
    'Electricity, Gas, Steam and Air Conditioning Supply'
  ),
  ('Mining and Quarrying'),
  (
    'Professional, Scientific and Technical Activities'
  ),
  ('Wholesale and Retail Trade'),
  ('Human Health and Social Work Activities'),
  ('Real Estate Activities'),
  ('Information and Communication'),
  ('Manufacturing'),
  ('Life Sciences'),
  (
    'Specialist Engineering, Infrastructure & Contractors'
  ),
  ('Business Franchises'),
  ('Advisory & Financial Services'),
  ('Technology'),
  ('Online Retail'),
  ('Consumer Goods & Services');
