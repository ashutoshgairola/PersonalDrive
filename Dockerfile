FROM node:lts-alpine3.16
RUN mkdir personaldrive
RUN mkdir personaldrive/client
RUN mkdir personaldrive/src
ADD client personaldrive/client
ADD src personaldrive/src
COPY *.* personaldrive/
WORKDIR personaldrive
RUN echo ls
RUN cd client && npm install
RUN npm install
ENV JWT_SECRET="secret"
ENV DB_URL=mongodb+srv://ashutosh_asg:uMd968kvQDSyiy7@fyndlearn.e16ttjp.mongodb.net/?retryWrites=true&w=majority
ENTRYPOINT ["npm", "run", "start"]
# ENTRYPOINT ["ping", "localhost"]