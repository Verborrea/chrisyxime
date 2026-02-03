DROP TABLE IF EXISTS respuestas;

CREATE TABLE IF NOT EXISTS respuestas (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
	invitado_id INTEGER NOT NULL UNIQUE,
  nombre_invitado TEXT NOT NULL,
  asistira BOOLEAN NOT NULL,
  nombre_acompañante TEXT,
  ceremonia BOOLEAN NOT NULL,
  recepcion BOOLEAN NOT NULL,
  fecha_registro DATETIME DEFAULT CURRENT_TIMESTAMP
);