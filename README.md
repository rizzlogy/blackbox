# Blackbox AI <a href="https://blackbox.rizzy.eu.org"><img src="https://www.blackbox.ai/apple-touch-icon.png" height="34px"></a>

<p align="center">
  <a target="_blank" href="https://blackbox.rizzy.eu.org">
    <img src="https://www.blackbox.ai/apple-touch-icon.png" alt="" width="169" />
  </a>
</p>

<p align="center">
  <a target="_blank" href="https://github.com/rizzlogy">
    <img title="Author" src="https://img.shields.io/badge/Author-RizzyFuzz-blue.svg?style=for-the-badge&logo=github" />
  </a>
  <br>
  <a target="_blank" href="https://www.npmjs.com/package/blackbox-ai">
    <img src="https://img.shields.io/npm/dw/blackbox-ai?color=blue&label=Downloads&logo=npm&style=flat">
  </a>
  <br>
  <a target="_blank" href="https://www.npmjs.com/package/blackbox-ai?activeTab=versions">
    <img src="https://img.shields.io/npm/v/blackbox-ai?color=green&label=version&logo=npm&style=social">
  </a>
</p>

# Bardie Installation

**📂 Normal Installation**

```bash
npm i blackbox-ai
```

# Simple Examples

### **Example Question To Send Blackbox API Request**

#

```js
const Blackbox = require("blackbox-ai");
const nigg = new Blackbox();

async function askQuestion() {
  try {
    let result = await nigg.question({ ask: "Keep it simple... What is Blackbox?" });
    console.log(result);
  } catch (error) {
    console.error("Error:", error.message);
  }
};

askQuestion();
```

##### Response:

```bash
{
  content: 'In machine learning, a black box model is a model that produces output without providing any insight into how it reached that output. This is in contrast to a white box model, which provides a clear and understandable explanation of how it arrived at its output.\n' +
    '\n' +
    'Black box models are often used when the underlying relationships between the input and output variables are complex or unknown. For example, a black box model might be used to predict the weather, as it is difficult to accurately model all of the factors that affect weather patterns.\n' +
    '\n' +
    'Black box models can be powerful tools, but they can also be difficult to interpret and debug. This is because it can be difficult to understand why a black box model makes certain predictions, and it can be difficult to identify and fix errors in the model.\n' +
    '\n' +
    'Despite these challenges, black box models are often used in practice because they can be very accurate. In some cases, black box models may even be more accurate than white box models, as they can capture complex relationships between variables that white box models cannot.',
  status: 200,
  creator: 'RizzyFuzz'
}
```
#

# Note

#### EN
> If there are bugs, please create [Issues](https://github.com/rizzlogy/blackbox/issues/new)

#### ID
> Jika Ada Bug, Silahkan Buat [Issues]([https://github.com/rizzlogy/blackbox/new)

#

**[Blackbox](https://www.npmjs.com/package/blackbox-ai) also Supports Typescript & EsModule! 🥳**
