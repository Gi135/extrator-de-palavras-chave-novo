import streamlit as st
from utils.extrator import extrair_palavras_chave, extrair_ngramas

st.set_page_config(page_title="Extrator de Palavras-Chave", layout="wide")

st.title("🔑 Extrator de Palavras-Chave de um Texto")

st.subheader("Insira seu texto abaixo:")

texto = st.text_area("Digite ou cole seu texto aqui", height=300)

st.subheader("Configurações")
top_n = st.slider("Quantidade de palavras-chave:", 5, 30, 10)
tipo_extracao = st.selectbox("Tipo de extração:", ["Palavras", "Expressões (N-gramas)"])

if tipo_extracao == "Expressões (N-gramas)":
    n = st.slider("Tamanho dos n-gramas (n):", 2, 5, 2)

if st.button("Extrair Palavras-Chave"):
    if texto.strip() == "":
        st.warning("⚠️ Por favor, insira um texto para analisar.")
    else:
        if tipo_extracao == "Palavras":
            resultado = extrair_palavras_chave(texto, top_n)
        else:
            resultado = extrair_ngramas(texto, n, top_n)

        st.subheader("🔍 Resultados")
        for item, freq in resultado:
            st.write(f"**{item}** — {freq} ocorrência(s)")

