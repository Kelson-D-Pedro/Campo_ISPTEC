-- CreateTable
CREATE TABLE "Estudante" (
    "id" SERIAL NOT NULL,
    "nomeCompleto" TEXT NOT NULL,
    "turma" TEXT NOT NULL,
    "curso" TEXT NOT NULL,
    "numeroEstudante" TEXT NOT NULL,
    "modalidade" TEXT NOT NULL,
    "dataUtilizacao" TIMESTAMP(3) NOT NULL,
    "horario" TEXT NOT NULL,
    "periodo" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,

    CONSTRAINT "Estudante_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Externo" (
    "id" SERIAL NOT NULL,
    "nomeCompleto" TEXT NOT NULL,
    "contacto" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "dataUtilizacao" TIMESTAMP(3) NOT NULL,
    "horario" TEXT NOT NULL,
    "periodo" TEXT NOT NULL,
    "modalidade" TEXT NOT NULL,

    CONSTRAINT "Externo_pkey" PRIMARY KEY ("id")
);
