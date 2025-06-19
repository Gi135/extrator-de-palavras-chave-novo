import re
from collections import Counter


def limpar_texto(texto):
    texto = texto.lower()
    texto = re.sub(r'[^\w\s]', '', texto)  # Remove pontuação
    return texto


def extrair_palavras_chave(texto, top_n=10):
    texto_limpo = limpar_texto(texto)
    palavras = texto_limpo.split()

    frequencia = Counter(palavras)
    mais_comuns = frequencia.most_common(top_n)

    return mais_comuns


def extrair_ngramas(texto, n=2, top_n=10):
    texto_limpo = limpar_texto(texto)
    palavras = texto_limpo.split()

    ngramas = zip(*[palavras[i:] for i in range(n)])
    ngramas = [' '.join(ng) for ng in ngramas]

    frequencia = Counter(ngramas)
    mais_comuns = frequencia.most_common(top_n)

    return mais_comuns
