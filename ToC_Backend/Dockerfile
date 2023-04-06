FROM python:3.9-alpine
WORKDIR /app
COPY ./requirements.txt /app
RUN pip3 install -r requirements.txt
COPY . /app
EXPOSE 5001
CMD python ./app.py