from airflow import DAG
from airflow.operators.python import PythonOperator
from datetime import datetime
dag = DAG("etl", start_date=datetime(2024, 1, 1), schedule_interval="@daily")
task = PythonOperator(task_id="extract", python_callable=lambda: print("extracting"), dag=dag)