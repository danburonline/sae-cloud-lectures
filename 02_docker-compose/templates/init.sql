-- Create a table for storing words
CREATE TABLE IF NOT EXISTS words (
    id SERIAL PRIMARY KEY,
    word VARCHAR(255) NOT NULL UNIQUE
);

-- Insert initial words into the table
INSERT INTO words (word) VALUES
('apple'),
('banana'),
('cherry'),
('date'),
('elderberry'),
('fig'),
('grape'),
('honeydew'),
('jackfruit'),
('kiwi'),
('lemon')
ON CONFLICT (word) DO NOTHING; -- This line avoids errors if the script runs multiple times and the word already exists
