create or replace table User(
    id serial primary key 
    name varchar(100) not null
    email varchar(50) not null unique
    cpf text not null unique
    created_at timestamp not null default now()
    updated_at timestamp not null default now()
    refresh_token varchar null 

)

create or replace type_user (
  id serial primary key 
  id_user integer
  type_id integer not null;

  id_user foreign key references user(id)
  type_id foreign key references type(id)
)

create or replace type (
    id serial primary key;
    description varchar(50) not null; 
)

create or replace wallet(
    id serial primary key; 
    
    id_user integer 
    
    balance integer default(0)

    id_user foreign key references user(id)

    created_at timestamp not null default now()
    update_at timestamp not null default now()

)