"use client";
import React, { useState } from "react";
import Image from "next/image";

const reactIcon = "/static/assets/home/techStack/frontend/react.svg";
const nextjsIcon = "/static/assets/home/techStack/frontend/nextjs.svg";
const angularIcon = "/static/assets/home/techStack/frontend/angular.svg";
const vueIcon = "/static/assets/home/techStack/frontend/vue.svg";
const emberIcon = "/static/assets/home/techStack/frontend/ember.svg";
const meteorIcon = "/static/assets/home/techStack/frontend/meteor.svg";
const htmlIcon = "/static/assets/home/techStack/frontend/html.svg";
const cssIcon = "/static/assets/home/techStack/frontend/css.svg";
const javascriptIcon = "/static/assets/home/techStack/frontend/javascript.svg";
const solidIcon = "/static/assets/home/techStack/frontend/solid.svg";
const tailwindIcon = "/static/assets/home/techStack/frontend/tailwind.svg";
const muiIcon = "/static/assets/home/techStack/frontend/mui.svg";
const shadcnIcon = "/static/assets/home/techStack/frontend/shadcn.svg";
const reduxIcon = "/static/assets/home/techStack/frontend/redux.svg";
const zustandIcon = "/static/assets/home/techStack/frontend/zustand.svg";

const javaIcon = "/static/assets/home/techStack/backend/java.svg";
const nodeIcon = "/static/assets/home/techStack/backend/nodejs.svg";
const phpIcon = "/static/assets/home/techStack/backend/php.svg";
const pythonIcon = "/static/assets/home/techStack/backend/python.svg";
const goIcon = "/static/assets/home/techStack/backend/go.svg";
const djangoIcon = "/static/assets/home/techStack/backend/django.svg";
const fastApiIcon = "/static/assets/home/techStack/backend/fast-api.svg";
const flaskIcon = "/static/assets/home/techStack/backend/flask.svg";
const laravelIcon = "/static/assets/home/techStack/backend/laravel.svg";
const codeIgniterIcon = "/static/assets/home/techStack/backend/code-igniter.svg";

const mysqlIcon = "/static/assets/home/techStack/database/mysql.svg";
const sqlLite = "/static/assets/home/techStack/database/sql-lite.svg";
const cassandraIcon = "/static/assets/home/techStack/database/cassandra.svg";
const hiveIcon = "/static/assets/home/techStack/database/hive.svg";
const mongodbIcon = "/static/assets/home/techStack/database/mongodb.svg";
const mariadbIcon = "/static/assets/home/techStack/database/mariadb.svg";
const neo4jIcon = "/static/assets/home/techStack/database/neo4j.svg";
const astraDbIcon = "/static/assets/home/techStack/database/astra-db.svg";

const androidIcon = "/static/assets/home/techStack/mobile/android.svg";
const iosIcon = "/static/assets/home/techStack/mobile/ios.svg";
const flutterIcon = "/static/assets/home/techStack/mobile/flutter.svg";
const cordovaIcon = "/static/assets/home/techStack/mobile/cordova.svg";
const xamarinIcon = "/static/assets/home/techStack/mobile/xamarin.svg";
const reactNativeIcon = "/static/assets/home/techStack/mobile/react-native.svg";

const dockerIcon = "/static/assets/home/techStack/devops/docker.svg";
const kubernetesIcon = "/static/assets/home/techStack/devops/kubernetes.svg";
const ansibleIcon = "/static/assets/home/techStack/devops/ansible.svg";
const dgraphIcon = "/static/assets/home/techStack/devops/dgraph.svg";
const postGressIcon = "/static/assets/home/techStack/devops/postgresql.svg";
const terraformIcon = "/static/assets/home/techStack/devops/terraform.svg";
const prometheusIcon = "/static/assets/home/techStack/devops/prometheus.svg";
const grafanaIcon = "/static/assets/home/techStack/devops/grafana.svg";
const newrelicIcon = "/static/assets/home/techStack/devops/newrelic.svg";
const sentryIcon = "/static/assets/home/techStack/devops/sentry.svg";
const trivyIcon = "/static/assets/home/techStack/devops/trivy.svg";
const sonarqubeIcon = "/static/assets/home/techStack/devops/sonarqube.svg";
const argocdIcon = "/static/assets/home/techStack/devops/argocd.svg";

const pytorchIcon = "/static/assets/home/techStack/machine-learning/pytorch.svg";
const tensorflowIcon = "/static/assets/home/techStack/machine-learning/tensorflow.svg";
const kerasIcon = "/static/assets/home/techStack/machine-learning/keras.svg";
const scikitIcon = "/static/assets/home/techStack/machine-learning/scikit.svg";
const xgboostIcon = "/static/assets/home/techStack/machine-learning/xgboost.svg";
const lightgbmIcon = "/static/assets/home/techStack/machine-learning/lightgbm.svg";
const mlflowIcon = "/static/assets/home/techStack/machine-learning/mlflow.svg";
const airflowIcon = "/static/assets/home/techStack/machine-learning/airflow.svg";
const flyteIcon = "/static/assets/home/techStack/machine-learning/flyte.svg";
const vertexaiIcon = "/static/assets/home/techStack/machine-learning/vertexai.svg";
const azuremlIcon = "/static/assets/home/techStack/machine-learning/azureml.svg";
const databricksIcon = "/static/assets/home/techStack/machine-learning/databricks.svg";

const llamaIndexIcon = "/static/assets/home/techStack/genai/llama-index.svg";
const haystackIcon = "/static/assets/home/techStack/genai/haystack.svg";
const weaviateIcon = "/static/assets/home/techStack/genai/weaviate.svg";
const chromaIcon = "/static/assets/home/techStack/genai/chroma.svg";
const anthropicIcon = "/static/assets/home/techStack/genai/anthropic.svg";
const cohereIcon = "/static/assets/home/techStack/genai/cohere.svg";
const deepmindIcon = "/static/assets/home/techStack/genai/deepmind.svg";
const ibmWatsonIcon = "/static/assets/home/techStack/genai/ibm-watson.svg";
const openaiIcon = "/static/assets/home/techStack/genai/openai.svg";
const metaIcon = "/static/assets/home/techStack/genai/meta.svg";
const mistralIcon = "/static/assets/home/techStack/genai/mistral.svg";
const drantIcon = "/static/assets/home/techStack/genai/qdrant.svg";
const pineconeIcon = "/static/assets/home/techStack/genai/pinecone.svg";
const langchainIcon = "/static/assets/home/techStack/genai/langchain.svg";
const milvusIcon = "/static/assets/home/techStack/genai/milvus.svg";
const huggingfaceIcon = "/static/assets/home/techStack/genai/huggingface.svg";
const grokIcon = "/static/assets/home/techStack/genai/grok.svg";

const tabs = [
  {
    key: "genAI",
    label: "GenAI",
    content: [
      { label: "OpenAI", icon: openaiIcon },
      { label: "Meta", icon: metaIcon },
      { label: "Mistral AI", icon: mistralIcon },
      { label: "QDrant", icon: drantIcon },
      { label: "Pinecone", icon: pineconeIcon },
      { label: "LangChain", icon: langchainIcon },
      { label: "Milvus", icon: milvusIcon },
      { label: "Hugging Face", icon: huggingfaceIcon },
      { label: "Grok", icon: grokIcon },
      { label: "LlamaIndex", icon: llamaIndexIcon },
      { label: "Haystack", icon: haystackIcon },
      { label: "Weaviate", icon: weaviateIcon },
      { label: "Chroma", icon: chromaIcon },
      { label: "Anthropic", icon: anthropicIcon },
      { label: "Cohere", icon: cohereIcon },
      { label: "Google DeepMind", icon: deepmindIcon },
      { label: "Neo4j", icon: neo4jIcon },
      { label: "IBM Watson", icon: ibmWatsonIcon },
    ],
  },
  {
    key: "machineLearning",
    label: "Machine Learning",
    content: [
      { label: "PyTorch", icon: pytorchIcon },
      { label: "TensorFlow", icon: tensorflowIcon },
      { label: "Keras", icon: kerasIcon },
      { label: "Scikit-learn", icon: scikitIcon },
      { label: "XGBoost", icon: xgboostIcon },
      { label: "LightGBM", icon: lightgbmIcon },
      { label: "MLflow", icon: mlflowIcon },
      { label: "Airflow", icon: airflowIcon },
      { label: "Flyte", icon: flyteIcon },
      { label: "Vertex AI", icon: vertexaiIcon },
      { label: "Azure ML", icon: azuremlIcon },
      { label: "Databricks", icon: databricksIcon },
    ],
  },
  {
    key: "devops",
    label: "DevOps",
    content: [
      { label: "Docker", icon: dockerIcon },
      { label: "Kubernetes", icon: kubernetesIcon },
      { label: "Ansible", icon: ansibleIcon },
      { label: "Terraform", icon: terraformIcon },
      { label: "Prometheus", icon: prometheusIcon },
      { label: "Grafana", icon: grafanaIcon },
      { label: "New Relic", icon: newrelicIcon },
      { label: "Sentry", icon: sentryIcon },
      { label: "Trivy", icon: trivyIcon },
      { label: "SonarQube", icon: sonarqubeIcon },
      { label: "ArgoCD", icon: argocdIcon },
      { label: "Dgraph", icon: dgraphIcon },
    ],
  },
  {
    key: "database",
    label: "Database",
    content: [
      { label: "MongoDB", icon: mongodbIcon },
      { label: "PostgreSQL", icon: postGressIcon },
      { label: "MySQL", icon: mysqlIcon },
      { label: "SQL Lite", icon: sqlLite },
      { label: "Cassandra", icon: cassandraIcon },
      { label: "MariaDB", icon: mariadbIcon },
      { label: "Neo4j", icon: neo4jIcon },
      { label: "AstraDB", icon: astraDbIcon },
      { label: "HIVE", icon: hiveIcon },
      { label: "Weaviate", icon: weaviateIcon },
      { label: "Chroma", icon: chromaIcon },
      { label: "Milvus", icon: milvusIcon },
    ],
  },
  {
    key: "mobile",
    label: "Mobile",
    content: [
      { label: "Android", icon: androidIcon },
      { label: "iOS", icon: iosIcon },
      { label: "React Native", icon: reactNativeIcon },
      { label: "Flutter", icon: flutterIcon },
      { label: "Cordova", icon: cordovaIcon },
      { label: "Xamarin", icon: xamarinIcon },
    ],
  },
  {
    key: "frontend",
    label: "Frontend",
    content: [
      { label: "ReactJS", icon: reactIcon },
      { label: "NextJS", icon: nextjsIcon },
      { label: "Tailwind", icon: tailwindIcon },
      { label: "Material UI (MUI)", icon: muiIcon },
      { label: "ShadCN UI", icon: shadcnIcon },
      { label: "Angular", icon: angularIcon },
      { label: "VueJS", icon: vueIcon },
      { label: "Ember", icon: emberIcon },
      { label: "Meteor", icon: meteorIcon },
      { label: "HTML5", icon: htmlIcon },
      { label: "CSS3", icon: cssIcon },
      { label: "JavaScript", icon: javascriptIcon },
      { label: "SolidJS", icon: solidIcon },
      { label: "Redux", icon: reduxIcon },
      { label: "Zustand", icon: zustandIcon },
    ],
  },
  {
    key: "backend",
    label: "Backend",
    content: [
      { label: "Node.js", icon: nodeIcon },
      { label: "Python", icon: pythonIcon },
      { label: "Django", icon: djangoIcon },
      { label: "Fast API", icon: fastApiIcon },
      { label: "Flask", icon: flaskIcon },
      { label: "PHP", icon: phpIcon },
      { label: "Laravel", icon: laravelIcon },
      { label: "CodeIgniter", icon: codeIgniterIcon },
      { label: "Java", icon: javaIcon },
      { label: "Go", icon: goIcon },
    ],
  },
] as const;

const TechStackTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("genAI");

  return (
    <div className="space-y-6 md:space-y-8 md:max-w-6xl md:mx-auto">
      <div className="md:hidden">
        <label htmlFor="techstack" className="sr-only">
          Select Tech Stack Category
        </label>
        <select
          id="techstack"
          value={activeTab}
          onChange={(e) => setActiveTab(e.target.value)}
          className="w-full rounded-md border border-gray-400 bg-white/10 text-[#ffffff] px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-black/5"
        >
          {tabs.map((tab) => (
            <option key={tab.key} value={tab.key}>
              {tab.label}
            </option>
          ))}
        </select>
      </div>
      <div
        className="hidden md:flex flex-wrap justify-center gap-3 xl:gap-4"
        role="tablist"
        aria-label="Tech stack categories"
      >
        {tabs.map((tab) => (
          <button
            key={tab.key}
            role="tab"
            aria-selected={activeTab === tab.key}
            aria-controls={`panel-${tab.key}`}
            id={`tab-${tab.key}`}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 rounded-full border text-sm font-semibold cursor-pointer transition-colors duration-200 ${
              activeTab === tab.key
                ? "border-gray-300 bg-white/10 text-yellow-orange-gradient"
                : "border-gray-700 bg-transparent text-[#E9FBFA] hover:border-gray-500 hover:bg-white/5"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {tabs.map((tab) => (
        <div
          key={tab.key}
          className="flex min-h-[200px] md:min-h-[240px] justify-center gap-8 lg:gap-6 flex-wrap w-full"
          role="tabpanel"
          id={`panel-${tab.key}`}
          aria-labelledby={`tab-${tab.key}`}
          hidden={activeTab !== tab.key}
        >
          {tab.content.map((item, idx) => (
            <div key={idx} className="group flex flex-col items-center">
              <div className="w-[80px] h-[80px] min-[500px]:w-[160px] min-[500px]:h-[160px] sm:w-[120px] sm:h-[120px] lg:w-[160px] lg:h-[100px] bg-transparent border border-[#424242] rounded-lg flex items-center justify-center mb-3 group-hover:bg-[#FFF]/10 group-hover:border-[#FFF]/40 transition-colors duration-300">
                <Image
                  src={item.icon}
                  alt={`${item.label} icon`}
                  width={64}
                  height={64}
                  sizes="64px"
                  loading="lazy"
                  decoding="async"
                  className="lg:group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-[12px] lg:text-[14px] font-normal text-white text-center leading-tight">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
export default TechStackTabs;
