<?php

class SalesProducts
{


    private $productName;
    private $productCost;
    private $productQuantity;
    //private $lista;



    public function __construct($productName, $productCost, $productQuantity)
    {
        $this->productName = $productName;
        $this->productCost = $productCost;
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
     * Get the value of productQuantity
     */ 
    public function getProductQuantity()
    {
        return $this->productQuantity;
    }



}
