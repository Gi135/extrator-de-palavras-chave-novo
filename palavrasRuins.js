import re
from collections import Counter


# Lista simples de stopwords (você pode expandir ela)
STOPWORDS = set([
    'a', 'à', 'às', 'ao', 'aos', 'as', 'o', 'os', 'de', 'do', 'da', 'das', 'dos',
    'e', 'é', 'em', 'no', 'na', 'nos', 'nas', 'um', 'uma', 'uns', 'umas',
    'por', 'para', 'com', 'sem', 'sobre', 'entre', 'que', 'quem', 'se', 'são',
    'não', 'mais', 'mas', 'já', 'como', 'ou', 'foi', 'era', 'há', 'faz', 'quando',
    'onde', 'porque', 'qual', 'quais', 'qualquer', 'muito', 'muitos', 'muita', 'muitas',
    'me', 'te', 'se', 'nos', 'lhe', 'eles', 'elas', 'eu', 'tu', 'ele', 'ela', 'nós', 'vós', 'vocês',
    'meu', 'minha', 'meus', 'minhas', 'teu', 'tua', 'teus', 'tuas', 'seu', 'sua', 'seus', 'suas',
    'este', 'esta', 'estes', 'estas', 'esse', 'essa', 'esses', 'essas', 'aquele', 'aquela', 'aqueles', 'aquelas'
])


def limpar_texto(texto):
    texto = texto.lower()
    texto = re.sub(r'[^\w\s]', '', texto)  # Remove pontuação
    return texto


def extrair_palavras_chave(texto, top_n=10):
    texto_limpo = limpar_texto(texto)
    palavras = texto_limpo.split()

    palavras_filtradas = [p for p in palavras if p not in STOPWORDS]

    frequencia = Counter(palavras_filtradas)
    mais_comuns = frequencia.most_common(top_n)

    return mais_comuns


def extrair_ngramas(texto, n=2, top_n=10):
    texto_limpo = limpar_texto(texto)
    palavras = texto_limpo.split()

    palavras_filtradas = [p for p in palavras if p not in STOPWORDS]

    ngramas = zip(*[palavras_filtradas[i:] for i in range(n)])
    ngramas = [' '.join(ng) for ng in ngramas]

    frequencia = Counter(ngramas)
    mais_comuns = frequencia.most_common(top_n)

    return mais_comuns
