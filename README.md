# **Projeto de Prática de Testes de Integração com React Native**

Este repositório foi desenvolvido para oferecer uma experiência prática na criação e execução de testes de integração em **React Native**, utilizando ferramentas modernas para garantir a funcionalidade de componentes e a interação entre eles.

---

## 📚 **O que são Testes de Integração?**

Testes de integração verificam como diferentes partes do sistema trabalham juntas, garantindo que os componentes individuais, quando combinados, funcionem como esperado. Esses testes:

- Validam fluxos e interações completas.
- Detectam problemas que não são evidentes em testes unitários.
- Aumentam a confiança na entrega do software.

---

## 🛠 **Ferramentas Utilizadas**

- **React Native**: Framework para desenvolvimento mobile.
- **Jest**: Framework de testes para criar e executar os testes.
- **@testing-library/react-native**: Biblioteca que facilita a criação de testes voltados para a experiência do usuário em interfaces React Native.

---

## 🔎 **Sobre o @testing-library/react-native**

A biblioteca **@testing-library/react-native (RNTL)** permite realizar testes de integração em diferentes níveis, abrangendo desde componentes individuais até telas completas. 

Com ela, é possível testar:

- **Componentes com vários subcomponentes**: Verificando se os elementos internos são renderizados e interagem corretamente.
- **Telas inteiras**: Validando fluxos completos de navegação e interação.

O foco principal do RNTL é simular o comportamento real do usuário, garantindo que os testes reflitam cenários de uso reais.

---

## 🔌 **Extensões Recomendadas para VS Code**

Para facilitar o desenvolvimento e execução dos testes, recomendamos instalar as seguintes extensões no Visual Studio Code:

1. **[Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest)**
   - Monitora e executa os testes em tempo real enquanto você edita o código.
   - Oferece feedback visual diretamente no editor.

### Como Instalar
1. Abra o VS Code.
2. Acesse a aba de extensões (Ctrl+Shift+X ou Cmd+Shift+X no Mac).
3. Pesquise por "Jest" e "React Native Tools".
4. Clique em "Install" nas extensões listadas.

---

## 📁 **Estrutura do Projeto**

A estrutura do projeto está organizada para destacar componentes e seus respectivos testes de integração:

```
react_native_test_integration/
├── src/
│   ├── components/
│   │   ├── InvestmentCard/
│   │   │   ├── InvestmentCard.tsx
│   │   │   └── InvestmentCard.test.tsx
├── jest.config.js
├── package.json
└── README.md
```

O foco principal do projeto está nos testes do componente `InvestmentCard`.

---

## 📝 **Testes Implementados**

### **Componente `InvestmentCard`**
Renderiza informações sobre investimentos, como ganhos, montante e data.

Os dois testes implementados para este componente são:

1. **Exibição correta das informações de investimento:**
   Verifica se os dados do investimento (código, rendimento, montante e data) são renderizados corretamente.

2. **Exibição de alerta ao interagir com o componente:**
   Simula a interação do usuário e valida se um alerta é exibido corretamente ao pressionar um botão.

---

## 🚀 **Executando os Testes**

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Execute os testes:
   ```bash
   npm test
   ```

3. Para executar testes em modo "watch":
   ```bash
   npm test -- --watch
   ```

4. Limpar o cache do Jest:
   ```bash
   npm test -- --clearCache
   ```

---

## 🎯 **Objetivos do Projeto**

1. Demonstrar como criar testes de integração em React Native com foco em um componente específico.
2. Desenvolver habilidades práticas na escrita e execução de testes.
3. Proporcionar um ambiente prático para consolidar conhecimentos em **React Native**, **Jest**, e **@testing-library/react-native**.

---

## 📧 **Contato**

Se tiver dúvidas ou sugestões, entre em contato comigo:
- **Email**: [jackson.96@gmail.com](mailto:jackson.96@gmail.com)
- **LinkedIn**: [linkedin.com/in/3jacksonsmith](https://linkedin.com/in/3jacksonsmith)

---

Divirta-se criando e testando componentes! 🚀