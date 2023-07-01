<?php

class SalesProducts
{


    private $productName;
    private $productCost;
    private $productDescription;
    private $productQuantity;
    //private $lista;



    public function __construct($productName, $productCost, $productDescription, $productQuantity)
    {
        $this->productName = $productName;
        $this->productCost = $productCost;
        $this->productDescription = $productDescription;
        $this->productQuantity= $productQuantity;
    }




	/**
	 * @return mixed
	 */
	public function getProductName() {
		return $this->productName;
	}
	

    /**
     * Get the value of productCost
     */ 
    public function getProductCost()
    {
        return $this->productCost;
    }


    /**
     * Get the value of productDescription
     */ 
    public function getProductDescription()
    {
        return $this->productDescription;
    }


    /**
     * Get the value of productQuantity
     */ 
    public function getProductQuantity()
    {
        return $this->productQuantity;
    }



}
