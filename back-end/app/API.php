<?php

namespace App;

class API
{
    private string $method;

    public function __construct()
    {
        $this->method = $_SERVER['REQUEST_METHOD'];
    }

    public function start()
    {
        switch ($this->method)
        {
            case "GET":
                $getDB = new \App\GetDB();
                $products = $getDB->getAllProducts();
                echo json_encode($products);
                break;
            case "POST":
                $request_body=file_get_contents('php://input');
                $data=json_decode($request_body,true);
                $setDB=new SetDB();
                $setDB->addProduct($data['sku'],$data['name'],$data['price'],$data['productType']);
                 break;

            case "DELETE":
                $del = $_GET['q'];
                $array = explode(',',$del);
                echo 'ja delete';
                $setDB=new SetDB();
                $setDB->deleteProduct($array);
        }
    }

}