<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="2.0">
    
    <xsl:output method="html" indent="yes" encoding="UTF-8"></xsl:output>
    
    <xsl:template match="doc">
        <html>
            <style>
                body{
                    background-color: antiquewhite;
                }
            </style>
            <head>
                <meta charset="UTF-8"/>
                <link rel="stylesheet" href="w3.css"/>
            </head>
            <body>
                <table>
                    <tr>
                        <td><h3>Título:</h3></td>
                        <td><xsl:value-of select="tit"/></td>
                    </tr>
                    <xsl:apply-templates/>
                </table>
            </body>
        </html>
    </xsl:template>

    
    <xsl:template match="prov">
        <div class="w3-content w3-center">
            <tr>
                <td><h3>Província</h3></td>
                <td><xsl:value-of select="."/></td>
            </tr>
        </div>
    </xsl:template>
    
    <xsl:template match="local">
        <div class="w3-content w3-center">
            <tr>
                <td><h3>Local</h3></td>
                <td><xsl:value-of select="."/></td>
            </tr>
        </div>
    </xsl:template>
    
    <xsl:template match="tit"/>
    
    <xsl:template match="from">
        <div class="w3-content w3-center">
            <tr>
                <td><h3>Local de origem</h3></td>
                <td><xsl:value-of select="."/></td>
            </tr>
        </div>
    </xsl:template>
    
    <xsl:template match="prof">
        <div class="w3-content w3-center">
            <tr>
                <td><h3>Profissão</h3></td>
                <td><xsl:value-of select="."/></td>
            </tr>
        </div>
    </xsl:template>
    
    <xsl:template match="file">
        <div class="w3-content w3-center">
            <tr>
                <td><h3>Ficheiro </h3></td>
                <td><xsl:value-of select="."/></td>
                <td><h3>Tipo:</h3></td>
                <td><xsl:value-of select="@t"/></td>
            </tr>
        </div>
    </xsl:template>
    
    <xsl:template match="intxt">
        <div class="w3-content w3-center">
            <tr>
                <td><h3>Instrumento</h3></td>
                <td><xsl:value-of select="."/></td>
            </tr>
        </div>
    </xsl:template>
    
    <xsl:template match="inst">
        <div class="w3-content w3-center">
            <tr>
                <td><h3>Instrumento</h3></td>
                <td><xsl:value-of select="."/></td>
            </tr>
        </div>
    </xsl:template>
    
    <xsl:template match="musico">
        <div class="w3-content w3-center">
            <tr>
                <td><h3>Músico</h3></td>
                <td><xsl:value-of select="."/></td>
            </tr>
        </div>
    </xsl:template>
    
    <xsl:template match="obs">
        <div class="w3-content w3-center">
            <tr>
                <td><h3>Observações</h3></td>
                <td><xsl:apply-templates/></td>
            </tr>
        </div>
    </xsl:template>
    
    <xsl:template match="duracao">
        <div class="w3-content w3-center">
            <tr>
                <td><h3>Duração</h3></td>
                <td><xsl:value-of select="."/></td>
            </tr>
        </div>
    </xsl:template>
    
</xsl:stylesheet>