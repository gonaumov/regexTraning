<?php
// test function:
function parse($html) {
    // I have split the pattern in two lines not to have long lines alerts by the PHP.net form:
    $pattern = "/<([\w]+)([^>]*?)(([\s]*\/>)|".
    "(>((([^<]*?|<\!\-\-.*?\-\->)|(?R))*)<\/\\1[\s]*>))/sm";
    preg_match_all($pattern, $html, $matches, PREG_OFFSET_CAPTURE);
    $elements = array();
   
    foreach ($matches[0] as $key => $match) {
        $elements[] = (object)array(
            'node' => $match[0],
            'offset' => $match[1],
            'tagname' => $matches[1][$key][0],
            'attributes' => isset($matches[2][$key][0]) ? $matches[2][$key][0] : '',
            'omittag' => ($matches[4][$key][1] > -1), // boolean
            'inner_html' => isset($matches[6][$key][0]) ? $matches[6][$key][0] : ''
        );
    }
    return $elements;
}

// random html nodes as example:
$html = <<<EOD
<div id="airport">
    <div geo:position="1.234324,3.455546" class="index">
        <!-- comment test:
        <div class="index_top" />
        -->
        <div class="element decorator">
                <ul class="lister">
                    <li onclick="javascript:item.showAttribute('desc');">
                        <h3 class="outline">
                            <a href="http://php.net/manual/en/regexp.reference.recursive.php" onclick="openPopup()">Link</a>
                        </h3>
                        <div class="description">Sample description</div>
                    </li>
                </ul>
        </div>
        <div class="clean-line"></div>
    </div>
</div>
<div id="omittag_test" rel="rootChild" />
EOD;

// application:
$elements = parse($html);

if (count($elements) > 0) {
    echo "Elements found: <b>".count($elements)."</b><br />";
   
    foreach ($elements as $element) {
        echo "<p>Tpl node: <pre>".htmlentities($element->node)."</pre>
        Tagname: <tt>".$element->tagname."</tt><br />
        Attributes: <tt>".$element->attributes."</tt><br />
        Omittag: <tt>".($element->omittag ? 'true' : 'false')."</tt><br />
        Inner HTML: <pre>".htmlentities($element->inner_html)."</pre></p>";
    }
}
?>
