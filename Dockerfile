FROM node

RUN mkdir -p /home/ssr  
        
WORKDIR /home/ssr 
                
RUN npm install

RUN npm run build

COPY . /home/ssr
         
EXPOSE 8080

CMD ["npm start"]
