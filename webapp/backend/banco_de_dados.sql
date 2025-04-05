-- Criação das tabelas

CREATE TABLE moradores (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL
);

CREATE TABLE tarefas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT NOT NULL,
    descricao TEXT,
    status TEXT DEFAULT 'pendente', -- pendente, concluída, postergada
    id_morador INTEGER,
    data_criacao DATE DEFAULT CURRENT_DATE,
    data_conclusao DATE,
    FOREIGN KEY (id_morador) REFERENCES moradores(id)
);

CREATE TABLE comentarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_tarefa INTEGER NOT NULL,
    comentario TEXT NOT NULL,
    data_comentario DATE DEFAULT CURRENT_DATE,
    FOREIGN KEY (id_tarefa) REFERENCES tarefas(id)
);

CREATE TABLE pontuacoes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_tarefa INTEGER NOT NULL,
    pontos INTEGER DEFAULT 0,
    FOREIGN KEY (id_tarefa) REFERENCES tarefas(id)
);

CREATE TABLE despesas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_morador INTEGER,
    descricao TEXT,
    valor REAL,
    data DATE DEFAULT CURRENT_DATE,
    comprovante TEXT, -- caminho do arquivo se quiser anexar algo
    FOREIGN KEY (id_morador) REFERENCES moradores(id)
);

CREATE TABLE rendas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_morador INTEGER,
    descricao TEXT,
    valor REAL,
    data DATE DEFAULT CURRENT_DATE,
    comprovante TEXT,
    FOREIGN KEY (id_morador) REFERENCES moradores(id)
);
