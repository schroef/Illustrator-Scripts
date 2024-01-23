/**
 * jd-export.jsx
 * -------------
 * Illustrator script—Exports CMYK, RGB, and Hex values for all the color
 * swatches in a document. CMYK to RGB conversion using Adobe’s default US
 * Web Coated SWOP2 to sRGB.
 * 
 * 
 * LICENSE
 * -------
 * Copyright 2017 Jms Dnns
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 * 
 * 1. Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 * 
 * 2. Redistributions in binary form must reproduce the above copyright
 * notice, this list of conditions and the following disclaimer in the
 * documentation and/or other materials provided with the distribution.
 * 
 * 3. Neither the name of the copyright holder nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
 * IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED
 * TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A
 * PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED
 * TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 * PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 * LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

// Adjustments
// Rombout Versluijs

// Changelog
// keepachangelog > https://keepachangelog.com/en/1.0.0/

// [0.0.2] 2024-01-22
// Added
// - Gradients color for conversion

// [0.0.1] 2024-01-22
// Added
// - SpotColors, LabColorm GrayColor conversion
// - conversion functions from LAB, SPOT, Grayscale

try {
    
        //
        // Function Library
        //
    
        /**
         * decimalToHex takes a number and returns it converted base 16, aka hex
         * @param {number} decimal number to convert to hex
         * @returns {String} a hex string
         */
        function decimalToHex(decimal) {
            var hex = decimal.toString(16);
            return hex;
        };
    
        /**
         * hexToDecimal takes a base 16 number and returns it converted to decimal
         * @param {String} hex a hex string
         * @returns {number} hex as decimal
         */
        function hexToDecimal(hex) {
            var decimal = parseInt(hex, 16);
            return decimal;
        };
    
        /**
         * padPrefix takes a string `s`, a desired width `width`, and a padding
         * character `padChar`, and returns a string. If the length of `s` is
         * less than `width`, `padChar` will be used to fill in the space.
         * @param {String} s string to be padded
         * @param {number} width desired width for the string
         * @param {String} padChar character to pad string
         * @returns {String} the padded string
         */
        function padPrefix(s, width, padChar) {
            var paddedS = s;
    
            if(s.length < width) {
                var padding = new Array(width - paddedS.length + 1).join(padChar);
                var paddedS = padding + s;
            }
    
            return paddedS;
        };

        /**
         * labToRgb takes a lab number and returns a RGB value
         * @param {number} decimal number to convert to hex
         * @returns {array} a RGB array
         * Source: Get Nearest Book Color.js 2024-01-22
         */

         function labToRgb (l,a,b){
                var lab = [l,a, b];
                var rgb = [l, (a * 255 / 256) - 0.5, (b * 255 / 256) - 0.5];
                // return [ solidColor.rgb.red, solidColor.rgb.green, solidColor.rgb.blue ];
                return { r: rgb[0], g: rgb[1], b: rgb[2] };
            }

        /**
         * RGBToHex takes numeric values for red, green, and blue, and returns
         * a hex string.
         * @param {number} r red
         * @param {number} g green
         * @param {number} b blue
         * @returns {String} a hex string
         */
        function RGBToHex(r, g, b) {
            if (r < 0 || r > 255) alert("Red value should be between 0-255: " + r);
            if (g < 0 || g > 255) alert("Green value should be between 0-255: " + g);
            if (b < 0 || b > 255) alert("Blue value should be between 0-255: " + b);
            
            // Convert to hex
            r_hex = decimalToHex(r);
            g_hex = decimalToHex(g);
            b_hex = decimalToHex(b);
    
            // Pad any values that are a single character
            r_hex = padPrefix(r_hex, 2, "0");
            g_hex = padPrefix(g_hex, 2, "0");
            b_hex = padPrefix(b_hex, 2, "0");
    
            // Create hex string
            hex = "#" + r_hex + g_hex + b_hex;
    
            return hex;
        };
    
        /**
         * hexToRGB takes a hex string and returns a structure with r, g, and b
         * fields.
         * @param {String} hex hex string representing an html color value
         * @returns {Object} Object with values for r, g, and b
         */
        function hexToRGB(hex) {
            // Remove leading "#" from "#000" or "#000000"
            if ((hex.length == 4 || hex.length == 7) && hex[0] == "#") {
                hex = hex.slice(1);
            }
    
            // Convert "RGB" to "RRGGBB"
            if (hex.length == 3) {
                var new_hex = "";
                for(var i=0; i < hex.length; i++) {
                    new_hex += hex [i] + hex[i];
                }
                hex = new_hex;
            }
    
            // Extract color values
            var r = hex.slice(0,2);
            var g = hex.slice(2,4);
            var b = hex.slice(4,6);
    
            // Convert to decimal
            var r_decimal = hexToDecimal(r);
            var g_decimal = hexToDecimal(g);
            var b_decimal = hexToDecimal(b);
    
            return { r: r_decimal, g: g_decimal, b: b_decimal };
        };

        /**
         * convertColor Translates color values from one format, like CMYK, to
         * another, like RGB. If the destFormat is RGB, the return value is an
         * array with 3 items: R, G, and B.
         * @param {String} srcFormat Color format of the source data
         * @param {String} destFormat Color format we are converting to
         * @param {Object} colorArray Source data
         * @returns {Object} An array of colors
         */
        function convertColor(srcFormat, destFormat, colorArray) {
            var srcColorSpace = ImageColorSpace[srcFormat];
            var destColorSpace = ImageColorSpace[destFormat];

            return app.convertSampleColor(srcColorSpace, colorArray, destColorSpace, ColorConvertPurpose.defaultpurpose);          
        }
    

        /**
         * RGBtoCMYK converts r, g, and b values into CMYK and returns an
         * object with c, m, y, and k fields.
         * @param {number} r red
         * @param {number} g green
         * @param {number} b blue
         * @returns {Object} Object with c, m, y, and k fields
         */
        function RGBToCMYK(r, g, b) {
            var colors = [Math.round(r), Math.round(g), Math.round(b)];
            var cmyk = convertColor("RGB", "CMYK", colors);

            return { c: cmyk[0], m: cmyk[1], y: cmyk[2], k: cmyk[3] }
        }
    
        /**
         * CMYKtoRGB converts c, m, y, and k values into RGB and returns a
         * structure with r, g, and b fields.
         * @param {number} c cyan
         * @param {number} m magenta
         * @param {number} y yellow
         * @param {number} k black
         * @returns {Object} Object with r, g, and b fields
         */
        function CMYKToRGB(c, m, y, k) {
            var colors = [Math.round(c), Math.round(m), Math.round(y), Math.round(k)]
            var rgb = convertColor("CMYK", "RGB", colors);

            return { r: rgb[0], g: rgb[1], b: rgb[2] };
        }
    
        /**
         * fromRGB is a conversion function to go from RGB to every format
         * @param {number} r red
         * @param {number} g green
         * @param {number} b blue
         * @returns {Object} Object with values for rgb, hex, and cmyk
         */
        function fromRGB(r, g, b) {
            var hex = RGBToHex(r, g, b);
            var cmyk = RGBToCMYK(r, g, b);
    
            var c = Math.round(cmyk.c);
            var m = Math.round(cmyk.m);
            var y = Math.round(cmyk.y);
            var k = Math.round(cmyk.k);
            
            return {
                r: r, g: g, b: b,
                hex: hex,
                c: c, m: m, y: y, k: k,
            };
        };
    
        /**
         * fromHex is a conversion function to go from Hex to every format
         * @param {String} hex hex string representing an html color value
         * @returns {Object} Object with values for rgb, hex, and cmyk
         */
        function fromHex(hex) {
            var rgb = HexToRGB(hex);
            
            var r = Math.round(rgb.r);
            var g = Math.round(rgb.g);
            var b = Math.round(rgb.b);
    
            var cmyk = RGBToCMYK(r, g, b);
    
            var c = Math.round(cmyk.c);
            var m = Math.round(cmyk.m);
            var y = Math.round(cmyk.y);
            var k = Math.round(cmyk.k);
    
            return {
                r: r, g: g, b: b,
                hex: hex,
                c: c, m: m, y: y, k: k,
            };
        };
    
        /**
         * fromCMYK is a conversion function to go from CMYK to every format
         * @param {number} c cyan
         * @param {number} m magenta
         * @param {number} y yellow
         * @param {number} k black
         * @returns {Object} Object with values for rgb, hex, and cmyk
         */
        function fromCMYK(c, m, y, k) {
            var rgb = CMYKToRGB(c, m, y, k);
    
            var r = Math.round(rgb.r);
            var g = Math.round(rgb.g);
            var b = Math.round(rgb.b);
    
            var hex = RGBToHex(r, g, b);
    
            return {
                r: r, g: g, b: b,
                hex: hex,
                c: c, m: m, y: y, k: k,
            };
        };

        /**
         * fromLAB is a conversion function to go from LAB to every format
         * @param {number} l light
         * @param {number} a 
         * @param {number} b brightness
         * @returns {Object} Object with values for rgb, hex, and cmyk
         */
        function fromLAB(l, a, b) {
            var rgb = labToRgb(l, a, b);
            var r = Math.round(rgb.r);
            var g = Math.round(rgb.g);
            var b = Math.round(rgb.b);

            var hex = RGBToHex(r, g, b);

            var cmyk = RGBToCMYK(r, g, b);
    
            var c = Math.round(cmyk.c);
            var m = Math.round(cmyk.m);
            var y = Math.round(cmyk.y);
            var k = Math.round(cmyk.k);
    
            return {
                r: r, g: g, b: b,
                hex: hex,
                c: c, m: m, y: y, k: k,
            };
        };

        /**
         * fromGRAY is a conversion function to go from GRAYScale to every format
         * @param {number} gray grayscale
         * @returns {Object} Object with values for rgb, hex, and cmyk
         */
        function fromGRAY(gray) {
            var cmyk = app.convertSampleColor(ImageColorSpace.GrayScale, [gray], ImageColorSpace.CMYK, ColorConvertPurpose.dummypurpose);
             var rgb = CMYKToRGB(cmyk[0],cmyk[1],cmyk[2],cmyk[3]);
    
            var r = Math.round(rgb.r);
            var g = Math.round(rgb.g);
            var b = Math.round(rgb.b);
            var rgb = labToRgb(l, a, b);
            var r = Math.round(rgb.r);
            var g = Math.round(rgb.g);
            var b = Math.round(rgb.b);

            var hex = RGBToHex(r, g, b);

            var cmyk = RGBToCMYK(r, g, b);
    
            var c = Math.round(cmyk.c);
            var m = Math.round(cmyk.m);
            var y = Math.round(cmyk.y);
            var k = Math.round(cmyk.k);
    
            return {
                r: r, g: g, b: b,
                hex: hex,
                c: c, m: m, y: y, k: k,
            };
        };
    
    
        /**
         * getColorNumbers is a method to get color numbers
         * @param {number} color color
         * @returns {Object} Object with values for rgb, hex, and cmyk
         */
         
        function getColorNumbers(color) {
            // alert(color.typename)
            if (color === undefined) {
                return undefined;
            } else if (color.typename === 'CMYKColor') {
                return [color.cyan, color.magenta, color.yellow, color.black];
            } else if (color.typename === 'RGBColor') {
                return [color.red, color.green, color.blue];
            } else if (color.typename === 'LabColor') {
                return [color.l, color.a, color.b];
            } else if (color.typename === 'SpotColor') {
                return getColorNumbers(color.spot.color);
                // alert(color.spot.color)
                return [color.spot.color, color.tint];
            } else if (color.typename === 'GrayColor') {
                return [color.gray];
            // } else if (color.typename === 'Spot') {
            //     return getColorNumbers(color);
            } else if (color.typename === 'NoColor') {
                return undefined;
            }
        }

        //
        // App Logic
        //
    
        if (app.documents.length > 0) {
    
            var destFolder = null;
            destFolder = Folder.selectDialog('Select destination folder for CSV', '~');
            function checkSwatches(swatches){
                if (swatches==undefined) {
                    alert("deselect swatches")
                    return false
                }
                return true
            }
            if (destFolder != null) {
                var doc = activeDocument;
                var swatches = doc.swatches;//.getSelected();//doc.swatches;
                // alert(swatches[10])
                if (checkSwatches(swatches)){

                    var colors = new Array();
                    // Document is CMYK
                    if (doc.documentColorSpace == DocumentColorSpace.CMYK) {
                        for (var i=0; i < swatches.length; i++) {
                            var noColor = "[NoColor]";
                            // alert(swatches[i].color.spot.color.cyan)
                            // alert(swatches[i].color.typename)
                            // alert(swatches[i].color)
                            if (swatches[i].color == "[CMYKColor]") {
                                var c = Math.round(swatches[i].color.cyan);
                                var m = Math.round(swatches[i].color.magenta);
                                var y = Math.round(swatches[i].color.yellow);
                                var k = Math.round(swatches[i].color.black);
        
                                var color = fromCMYK(c, m, y, k);
        
                                var na = swatches[i].name;
                                color.name = na;
        
                                colors.push(color);
                            } else if ((swatches[i].color == "[SpotColor]") && (swatches[i].color != noColor)) {
                                
                                var c = Math.round(swatches[i].color.spot.color.cyan);
                                var m = Math.round(swatches[i].color.spot.color.magenta);
                                var y = Math.round(swatches[i].color.spot.color.yellow);
                                var k = Math.round(swatches[i].color.spot.color.black);
        
                                var color = fromCMYK(c, m, y, k);
        
                                var na = swatches[i].name;
                                color.name = na;
        
                                colors.push(color);
                            } else if ((swatches[i].color == "[LabColor]") && (swatches[i].color != noColor)) {
                                
                                var l = Math.round(swatches[i].color.spot.getInternalColor()[0]);
                                var a = Math.round(swatches[i].color.spot.getInternalColor()[1]);
                                var b = Math.round(swatches[i].color.spot.getInternalColor()[2]);
                                
                                
                                var color = fromLAB(l, a, b);
                                // var color = fromCMYK(c, m, y, k);
        
                                var na = swatches[i].name;
                                color.name = na;
        
                                colors.push(color);
                            } else if ((swatches[i].color == "[GrayColor]") && (swatches[i].color != noColor)) {
                                var color = fromGRAY(swatches[i].color.gray);
                                // var color = fromCMYK(c, m, y, k);
        
                                var na = swatches[i].name;
                                color.name = na;
        
                                colors.push(color);
                            } else if (swatches[i].color == '[GradientColor]') {
                                var colorStops = new Object();

                                colorStops.name = swatches[i].color.gradient.name;
                                var gradientStops = swatches[i].color.gradient.gradientStops;

                                colors.push(colorStops);
                                for (var j = 0; j < gradientStops.length; j++) {
                                    var col = getColorNumbers(gradientStops[j].color)
                                    var c = Math.round(col[0]), 
                                        m = Math.round(col[1]), 
                                        y = Math.round(col[2]), 
                                        k = Math.round(col[3]);
                                    var color = fromCMYK(c,m,y,k);
                                    // var color = fromCMYK(col[0], col[1], col[2], col[3]);
                                    // Colorstop by count
                                    var na = "ColorStop "+j;
                                    // Color name (Can have issues if color in CMYK doc is RGB)
                                    // var na = "C="+c+" M="+m+" Y="+y+" K="+k;
                                
                                    color.name = na;
                                    // colorStops = colorStops.concat(color);
                                    colors.push(color);
                                }
                            } else {
                                // Ignore anything that is not CMYK
                            }
                        }
                    }
                    // Document is RGB
                    else if (doc.documentColorSpace == DocumentColorSpace.RGB) {
                        for (var i = 0; i < swatches.length; i++) {
                            if (swatches[i].color == "[RGBColor]") {
                                var r = Math.round(swatches[i].color.red);
                                var g = Math.round(swatches[i].color.green);
                                var b = Math.round(swatches[i].color.blue);
                                var color = fromRGB(r, g, b);
        
                                var na = swatches[i].name;
                                color.name = na;                        
        
                                colors.push(color);
                            } else if ((swatches[i].color == "[SpotColor]") && (swatches[i].color != noColor)) {
                                var r = Math.round(swatches[i].color.spot.color.red);
                                var g = Math.round(swatches[i].color.spot.color.green);
                                var b = Math.round(swatches[i].color.spot.color.blue);
        
                                var color = fromRGB(r, g, b);
        
                                var na = swatches[i].name;
                                color.name = na;
        
                                colors.push(color);
                            } else if ((swatches[i].color == "[LabColor]") && (swatches[i].color != noColor)) {
                                var l = Math.round(swatches[i].color.spot.getInternalColor()[0]);
                                var a = Math.round(swatches[i].color.spot.getInternalColor()[1]);
                                var b = Math.round(swatches[i].color.spot.getInternalColor()[2]);
                                
                                var color = fromLAB(l, a, b);
        
                                var na = swatches[i].name;
                                color.name = na;
        
                                colors.push(color);
                            } else if ((swatches[i].color == "[GrayColor]") && (swatches[i].color != noColor)) {
                                var color = fromGRAY(swatches[i].color.gray);
        
                                var na = swatches[i].name;
                                color.name = na;
        
                                colors.push(color);
                            } else if (swatches[i].color == '[GradientColor]') {
                                var colorStops = new Object();

                                colorStops.name = swatches[i].color.gradient.name;
                                var gradientStops = swatches[i].color.gradient.gradientStops;

                                colors.push(colorStops);
                                for (var j = 0; j < gradientStops.length; j++) {
                                    var col = getColorNumbers(gradientStops[j].color)
                                    var color = fromRGB(col[0], col[1], col[2]);

                                    // Colorstop by count
                                    var na = "ColorStop "+j;
                                    // Color name (Can have issues if color in CMYK doc is RGB)
                                    // var na = "R="+col[0]+" G="+col[1]+" B="+col[2];
                                
                                    color.name = na;
                                    // colorStops = colorStops.concat(color);
                                    colors.push(color);
                                }
                            } else {
                                // Ignore anything that is not CMYK
                            }
                        }
                    }
        
                    // Open output file
                    var listName = doc.name + ".csv";
                    var listFile = destFolder + "/" + listName;
                    var theFile = new File(listFile);
                    var isOpen = theFile.open("w");
        
                    if (isOpen) {
                        theFile.seek(0, 0);
        
                        // Write headers
                        theFile.writeln("I.D.,name,C,M,Y,K,hex,R,G,B");
                        
                        // Print every item in colors.
                        for (var i = 0; i < colors.length; i++) {
                            var color = colors[i];
                            // color.name is handled specifically below to add quotation marks
                            if(color.c==undefined && color.m==undefined){
                                var color_items = "Gradient Color";
                            } else {
                                var color_items = [
                                    color.c,
                                    color.m,
                                    color.y,
                                    color.k,
                                    color.hex,
                                    color.r,
                                    color.g,
                                    color.b
                                ];
                                color_items.join(',');
                            }
                            // alert(color_items=="" +"-"+color_items)
                            // }
                            // alert(color_items==[,,,,,,,])
                            // alert(color_items)
                            // items = color_items==[,,,,,,,] ? "" : color_items.join(',');
                            var line = i + "," + "\"" + color.name + "\"," + color_items;
                            theFile.writeln(line);
                        }
        
                        theFile.close();
                    }
                    
                    alert('Export Complete');
                }
            }
            else {
                alert('Export Aborted');
            }
        }
        else {
            throw new Error('There are no documents open!');
        }
    } catch (e) {
        alert(e.message, "Script Alert", true);
}
    